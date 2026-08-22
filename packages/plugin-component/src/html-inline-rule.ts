import type { RuleInline } from '@mdit-vue/types';

import { HTML_TAG_RE } from './html-re.js';

// Forked and modified from 'markdown-it/src/rules_inline/html_inline.ts'

const isLetter = (ch: number): boolean => {
  const lc = ch | 0x20; // to lower case
  return lc >= 0x61 /* a */ && lc <= 0x7a; /* z */
};

const isLinkOpen = (str: string): boolean => /^<a[>\s]/i.test(str);
const isLinkClose = (str: string): boolean => /^<\/a\s*>/i.test(str);

export const htmlInlineRule: RuleInline = (state, silent) => {
  const { pos } = state;

  if (!state.md.options.html) {
    return false;
  }

  // Check start
  const max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3c /* < */ || pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  const ch = state.src.charCodeAt(pos + 1);
  if (
    ch !== 0x21 /* ! */ &&
    ch !== 0x3f /* ? */ &&
    ch !== 0x2f /* / */ &&
    !isLetter(ch)
  ) {
    return false;
  }

  // MODIFIED: Tweak the original HTML_TAG_RE
  const match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) {
    return false;
  }

  if (!silent) {
    const token = state.push('html_inline', '', 0);
    token.content = match[0];

    if (isLinkOpen(token.content)) {
      state.linkLevel++;
    }
    if (isLinkClose(token.content)) {
      state.linkLevel--;
    }
  }
  state.pos += match[0].length;
  return true;
};
