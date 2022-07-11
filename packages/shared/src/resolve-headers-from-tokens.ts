import type { MarkdownItHeader } from '@mdit-vue/types';
import type Token from 'markdown-it/lib/token';
import { resolveTitleFromToken } from './resolve-title-from-token';

/**
 * Resolve headers from markdown-it tokens
 */
export const resolveHeadersFromTokens = (
  tokens: Token[],
  {
    level,
    shouldAllowHtml,
    shouldEscapeText,
    slugify,
    format,
  }: {
    level: number[];
    shouldAllowHtml: boolean;
    shouldEscapeText: boolean;
    slugify: (str: string) => string;
    format?: (str: string) => string;
  },
): MarkdownItHeader[] => {
  // store the result of headers
  const headers: MarkdownItHeader[] = [];

  // a temp headers stack for generating the headers tree
  const stack: MarkdownItHeader[] = [];

  // push a header to the headers tree
  const push = (header: MarkdownItHeader): void => {
    while (stack.length !== 0 && header.level <= stack[0].level) {
      stack.shift();
    }

    if (stack.length === 0) {
      headers.push(header);
      stack.push(header);
    } else {
      stack[0].children.push(header);
      stack.unshift(header);
    }
  };

  tokens.forEach((_, idx) => {
    const token = tokens[idx];

    // if the token type does not match, skip
    if (token?.type !== 'heading_open') {
      return;
    }

    // get the level from the tag, h1 -> 1
    const headerLevel = Number.parseInt(token.tag.slice(1), 10);

    // if the level should not be extracted, skip
    if (!level.includes(headerLevel)) {
      return;
    }

    // the next token of 'heading_open' contains the heading content
    const nextToken = tokens[idx + 1];

    // if the next token does not exist, skip
    if (!nextToken) {
      return;
    }

    const title = resolveTitleFromToken(nextToken, {
      shouldAllowHtml,
      shouldEscapeText,
    });

    // the id of the heading anchor is the slugify result of markdown-it-anchor
    // if the id does not exist, slugify the title ourselves
    const slug = token.attrGet('id') ?? slugify(title);

    // push the header to tree
    push({
      level: headerLevel,
      title: format?.(title) ?? title,
      slug,
      children: [],
    });
  });

  return headers;
};
