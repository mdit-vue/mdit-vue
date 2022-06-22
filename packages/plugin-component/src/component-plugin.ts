import type { PluginSimple } from 'markdown-it';
import { htmlBlockRule } from './html-block-rule';
import { htmlInlineRule } from './html-inline-rule';

/**
 * Replacing the default htmlBlock rule to allow using custom components
 * in markdown
 */
export const componentPlugin: PluginSimple = (md): void => {
  // override default html block ruler
  md.block.ruler.at('html_block', htmlBlockRule, {
    alt: ['paragraph', 'reference', 'blockquote'],
  });
  // override default html inline ruler
  md.inline.ruler.at('html_inline', htmlInlineRule);
};
