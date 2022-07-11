import {
  slugify as defaultSlugify,
  resolveHeadersFromTokens,
} from '@mdit-vue/shared';
import type { MarkdownItHeader } from '@mdit-vue/types';
import type { PluginWithOptions } from 'markdown-it';
import { createRenderHeaders } from './create-render-headers';
import { createTocBlockRule } from './create-toc-block-rule';
import type { TocPluginOptions } from './types';

/**
 * Generate table of contents
 *
 * Forked and modified from markdown-it-toc-done-right:
 *
 * @see https://github.com/nagaozen/markdown-it-toc-done-right
 */
export const tocPlugin: PluginWithOptions<TocPluginOptions> = (
  md,
  {
    pattern = /^\[\[toc\]\]$/i,
    slugify = defaultSlugify,
    format,
    level = [2, 3],
    containerTag = 'nav',
    containerClass = 'table-of-contents',
    listTag = 'ul',
    listClass = '',
    itemClass = '',
    linkTag = 'a',
    linkClass = '',
  }: TocPluginOptions = {},
): void => {
  let headers: MarkdownItHeader[];

  // push the rule to the end of the chain
  // resolve headers from the parsed tokens
  md.core.ruler.push('resolveTocHeaders', (state) => {
    headers = resolveHeadersFromTokens(state.tokens, {
      level,
      shouldAllowHtml: true,
      shouldEscapeText: true,
      slugify,
      format,
    });
    return true;
  });

  // add toc syntax as a block rule
  md.block.ruler.before(
    'heading',
    'toc',
    createTocBlockRule({
      pattern,
      containerTag,
      containerClass,
    }),
    {
      alt: ['paragraph', 'reference', 'blockquote'],
    },
  );

  const renderHeaders = createRenderHeaders({
    listTag,
    listClass,
    itemClass,
    linkTag,
    linkClass,
  });

  // custom toc_body render rule
  md.renderer.rules.toc_body = () => {
    /* istanbul ignore if */
    if (!headers) {
      return '';
    }
    return renderHeaders(headers);
  };
};
