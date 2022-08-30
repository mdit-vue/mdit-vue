import {
  slugify as defaultSlugify,
  resolveHeadersFromTokens,
} from '@mdit-vue/shared';
import type { MarkdownItEnv } from '@mdit-vue/types';
import type MarkdownIt from 'markdown-it';
import type { HeadersPluginOptions } from './types.js';

/**
 * Get markdown headers info
 *
 * Extract them into env
 */
export const headersPlugin: MarkdownIt.PluginWithOptions<
  HeadersPluginOptions
> = (md, { level = [2, 3], slugify = defaultSlugify, format } = {}): void => {
  // extract headers to env
  const render = md.renderer.render.bind(md.renderer);
  md.renderer.render = (tokens, options, env: MarkdownItEnv) => {
    env.headers = resolveHeadersFromTokens(tokens, {
      level,
      shouldAllowHtml: false,
      shouldEscapeText: false,
      slugify,
      format,
    });
    return render(tokens, options, env);
  };
};
