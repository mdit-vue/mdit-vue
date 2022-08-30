import type { MarkdownItEnv } from '@mdit-vue/types';
import type MarkdownIt from 'markdown-it';
import {
  TAG_NAME_SCRIPT,
  TAG_NAME_STYLE,
  TAG_NAME_TEMPLATE,
} from './constants.js';
import { SCRIPT_SETUP_TAG_OPEN_REGEXP, createSfcRegexp } from './sfc-regexp.js';
import type { SfcRegExpMatchArray } from './sfc-regexp.js';
import type { SfcPluginOptions } from './types.js';

/**
 * Get Vue SFC blocks
 *
 * Extract them into env and avoid rendering them
 */
export const sfcPlugin: MarkdownIt.PluginWithOptions<SfcPluginOptions> = (
  md,
  { customBlocks = [] }: SfcPluginOptions = {},
): void => {
  const sfcRegexp = createSfcRegexp({ customBlocks });

  // wrap the original render function
  const render = md.render.bind(md);
  md.render = (src, env: MarkdownItEnv = {}) => {
    // initialize `env.sfcBlocks`
    env.sfcBlocks = {
      template: null,
      script: null,
      scriptSetup: null,
      scripts: [],
      styles: [],
      customBlocks: [],
    };

    // call the original render function to get the rendered result
    const rendered = render(src, env);

    // create template block from the rendered result
    env.sfcBlocks.template = {
      type: TAG_NAME_TEMPLATE,
      content: `<${TAG_NAME_TEMPLATE}>${rendered}</${TAG_NAME_TEMPLATE}>`,
      contentStripped: rendered,
      tagOpen: `<${TAG_NAME_TEMPLATE}>`,
      tagClose: `</${TAG_NAME_TEMPLATE}>`,
    };

    return rendered;
  };

  // wrap the original html_block renderer rule
  const htmlBlockRule = md.renderer.rules.html_block!;
  md.renderer.rules.html_block = (
    tokens,
    idx,
    options,
    env: MarkdownItEnv,
    self,
  ) => {
    // skip if `env.sfcBlocks` is not initialized
    if (!env.sfcBlocks) {
      return htmlBlockRule(tokens, idx, options, env, self);
    }

    // get the html_block token
    const token = tokens[idx];
    const content = token.content;

    // try to match sfc
    const match = content.match(sfcRegexp) as SfcRegExpMatchArray | null;
    if (!match) {
      return htmlBlockRule(tokens, idx, options, env, self);
    }

    // extract sfc blocks to `env.sfcBlocks`
    const sfcBlock = match.groups;
    if (sfcBlock.type === TAG_NAME_SCRIPT) {
      env.sfcBlocks.scripts.push(sfcBlock);
      if (SCRIPT_SETUP_TAG_OPEN_REGEXP.test(sfcBlock.tagOpen)) {
        env.sfcBlocks.scriptSetup = sfcBlock;
      } else {
        env.sfcBlocks.script = sfcBlock;
      }
    } else if (sfcBlock.type === TAG_NAME_STYLE) {
      env.sfcBlocks.styles.push(sfcBlock);
    } else {
      env.sfcBlocks.customBlocks.push(sfcBlock);
    }

    // avoid rendering sfc blocks
    return '';
  };
};
