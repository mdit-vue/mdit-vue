import type { MarkdownItEnv } from '@mdit-vue/types';
import type { PluginWithOptions } from 'markdown-it';
import type { SfcPluginOptions } from './types';

/**
 * Avoid rendering vue SFC script / style / custom blocks
 *
 * Extract them into env
 */
export const sfcPlugin: PluginWithOptions<SfcPluginOptions> = (
  md,
  { customBlocks = [] }: SfcPluginOptions = {},
): void => {
  // extract `<script>`, `<style>` and other user defined custom blocks
  const sfcBlocks = Array.from(new Set(['script', 'style', ...customBlocks]));
  const sfcBlocksRegexp = new RegExp(
    `^<(${sfcBlocks.join('|')})(?=(\\s|>|$))`,
    'i',
  );

  const rawRule = md.renderer.rules.html_block!;
  md.renderer.rules.html_block = (
    tokens,
    idx,
    options,
    env: MarkdownItEnv,
    self,
  ) => {
    const content = tokens[idx].content;

    // extract sfc blocks to env and do not render them
    if (sfcBlocksRegexp.test(content.trim())) {
      env.sfcBlocks ??= [];
      env.sfcBlocks.push(content);
      return '';
    }

    return rawRule(tokens, idx, options, env, self);
  };
};
