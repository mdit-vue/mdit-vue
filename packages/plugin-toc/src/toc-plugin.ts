import {
  slugify as defaultSlugify,
  resolveHeadersFromTokens,
} from '@mdit-vue/shared';
import type MarkdownIt from 'markdown-it';
import { createRenderHeaders } from './create-render-headers.js';
import { createTocBlockRule } from './create-toc-block-rule.js';
import type { TocPluginOptions } from './types.js';

/**
 * Generate table of contents
 *
 * Forked and modified from markdown-it-toc-done-right:
 *
 * @see https://github.com/nagaozen/markdown-it-toc-done-right
 */
export const tocPlugin: MarkdownIt.PluginWithOptions<TocPluginOptions> = (
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

  // create the headers renderer from the options
  const renderHeaders = createRenderHeaders({
    listTag,
    listClass,
    itemClass,
    linkTag,
    linkClass,
  });

  // custom toc_body render rule
  // Notice that markdown-it-toc-done-right collects ast (i.e. headers) by pushing a custom ruler,
  // that's good because it ensures we only collect headers once. However the collected headers
  // are possible to be overridden by calling `md.render` / `md.renderInline` before the toc_body
  // is rendered (like https://github.com/vuejs/vitepress/issues/1093).
  // Here we changed to collect headers during rendering toc_body. The drawback is that it is possible
  // to collect headers multiple times if there are more than one toc_body, which is acceptable because
  // in most cases there is only one toc per page.
  md.renderer.rules.toc_body = (tokens) =>
    renderHeaders(
      resolveHeadersFromTokens(tokens, {
        level,
        shouldAllowHtml: true,
        shouldEscapeText: true,
        slugify,
        format,
      }),
    );
};
