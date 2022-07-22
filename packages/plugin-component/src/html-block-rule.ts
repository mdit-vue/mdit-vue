import type { RuleBlock } from 'markdown-it/lib/parser_block.js';
import { HTML_OPEN_CLOSE_TAG_RE } from './html-re.js';
import { TAGS_BLOCK, TAGS_INLINE, TAGS_VUE_RESERVED } from './tags.js';
import type { ComponentPluginOptions } from './types.js';

// Forked and modified from 'markdown-it/lib/rules_block/html_block.js'

/**
 * ADDED: wrap the `HTML_SEQUENCES` with a function, because we allow user options
 * to customize the block tags and inline tags
 */
const createHtmlSequences = ({
  blockTags,
  inlineTags,
}: Required<ComponentPluginOptions>): [RegExp, RegExp, boolean][] => {
  const forceBlockTags = [...blockTags, ...TAGS_BLOCK];
  const forceInlineTags = [
    ...inlineTags,
    ...TAGS_INLINE.filter((item) => !TAGS_VUE_RESERVED.includes(item)),
  ];

  // An array of opening and corresponding closing sequences for html tags,
  // last argument defines whether it can terminate a paragraph or not
  const HTML_SEQUENCES: [RegExp, RegExp, boolean][] = [
    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    // MODIFIED: Support extra block tags from user options
    [
      new RegExp('^</?(' + forceBlockTags.join('|') + ')(?=(\\s|/?>|$))', 'i'),
      /^$/,
      true,
    ],
    // ADDED: Exclude known inline tags, and treat all unknown tags as block tags
    [
      new RegExp(
        '^</?(?!(' +
          forceInlineTags.join('|') +
          ')(?![\\w-]))\\w[\\w-]*[\\s/>]',
      ),
      /^$/,
      true,
    ],
    // this line is to treat a line that only have a single self-closed html tag
    // as html_block, even if it's a self-closed inline tag
    // MODIFIED: Tweak the original HTML_OPEN_CLOSE_TAG_RE
    [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'), /^$/, false],
  ];

  return HTML_SEQUENCES;
};

export const createHtmlBlockRule = (
  options: Required<ComponentPluginOptions>,
): RuleBlock => {
  const HTML_SEQUENCES = createHtmlSequences(options);

  return (state, startLine, endLine, silent): boolean => {
    let i: number;
    let nextLine: number;
    let lineText: string;
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    if (!state.md.options.html) {
      return false;
    }

    if (state.src.charCodeAt(pos) !== 0x3c /* < */) {
      return false;
    }

    lineText = state.src.slice(pos, max);

    for (i = 0; i < HTML_SEQUENCES.length; i++) {
      if (HTML_SEQUENCES[i][0].test(lineText)) {
        break;
      }
    }

    if (i === HTML_SEQUENCES.length) {
      return false;
    }

    if (silent) {
      // true if this sequence can be a terminator, false otherwise
      return HTML_SEQUENCES[i][2];
    }

    nextLine = startLine + 1;

    // If we are here - we detected HTML block.
    // Let's roll down till block end.
    if (!HTML_SEQUENCES[i][1].test(lineText)) {
      for (; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }

        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);

        if (HTML_SEQUENCES[i][1].test(lineText)) {
          if (lineText.length !== 0) {
            nextLine++;
          }
          break;
        }
      }
    }

    state.line = nextLine;

    const token = state.push('html_block', '', 0);
    token.map = [startLine, nextLine];
    token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

    return true;
  };
};
