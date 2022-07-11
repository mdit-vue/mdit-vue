import {
  slugify as defaultSlugify,
  resolveHeadersFromTokens,
} from '@mdit-vue/shared';
import type { MarkdownItEnv, MarkdownItHeader } from '@mdit-vue/types';
import type { PluginWithOptions } from 'markdown-it';
import type { HeadersPluginOptions } from './types';

/**
 * Get markdown headers info
 *
 * Extract them to env
 */
export const headersPlugin: PluginWithOptions<HeadersPluginOptions> = (
  md,
  { level = [2, 3], slugify = defaultSlugify, format } = {},
): void => {
  let headers: MarkdownItHeader[];

  // push the rule to the end of the chain
  // resolve headers from the parsed tokens
  md.core.ruler.push('resolveHeaders', (state) => {
    headers = resolveHeadersFromTokens(state.tokens, {
      level,
      shouldAllowHtml: false,
      shouldEscapeText: false,
      slugify,
      format,
    });
    return true;
  });

  // extract headers to env
  const render = md.render.bind(md);
  md.render = (src, env: MarkdownItEnv = {}) => {
    const result = render(src, env);
    env.headers = headers;
    return result;
  };
};
