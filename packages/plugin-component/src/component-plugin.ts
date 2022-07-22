import type { PluginWithOptions } from 'markdown-it';
import { createHtmlBlockRule } from './html-block-rule.js';
import { htmlInlineRule } from './html-inline-rule.js';
import type { ComponentPluginOptions } from './types.js';

/**
 * Replacing the default htmlBlock rule to allow using custom components
 * in markdown
 */
export const componentPlugin: PluginWithOptions<ComponentPluginOptions> = (
  md,
  { blockTags = [], inlineTags = [] } = {},
): void => {
  const htmlBlockRule = createHtmlBlockRule({
    blockTags,
    inlineTags,
  });

  // override default html block ruler
  md.block.ruler.at('html_block', htmlBlockRule, {
    alt: ['paragraph', 'reference', 'blockquote'],
  });
  // override default html inline ruler
  md.inline.ruler.at('html_inline', htmlInlineRule);
};
