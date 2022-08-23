import type { MarkdownItHeader } from '@mdit-vue/types';
import type Token from 'markdown-it/lib/token.js';
import { resolveTitleFromToken } from './resolve-title-from-token.js';
import type { ResolveTitleOptions } from './resolve-title-from-token.js';

export interface ResolveHeadersOptions extends ResolveTitleOptions {
  /**
   * Heading level that going to be resolved
   */
  level: number[];

  /**
   * A custom slugification function
   *
   * Would be ignored if the `id` attr of the token is set.
   */
  slugify: (str: string) => string;

  /**
   * A function for formatting headings
   */
  format?: (str: string) => string;
}

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
  }: ResolveHeadersOptions,
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

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    // if the token type does not match, skip
    if (token?.type !== 'heading_open') {
      continue;
    }

    // get the level from the tag, h1 -> 1
    const headerLevel = Number.parseInt(token.tag.slice(1), 10);

    // if the level should not be extracted, skip
    if (!level.includes(headerLevel)) {
      continue;
    }

    // the next token of 'heading_open' contains the heading content
    const nextToken = tokens[i + 1];

    // if the next token does not exist, skip
    if (!nextToken) {
      continue;
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
      link: `#${slug}`,
      children: [],
    });
  }

  return headers;
};
