import {
  slugify as defaultSlugify,
  resolveHeadersFromTokens,
} from '@mdit-vue/shared';
import type { MarkdownItPlugin } from '@mdit-vue/types';

import type { HeadersPluginOptions } from './types.js';

/**
 * Get markdown headers info
 *
 * Extract them into env
 */
export const headersPlugin: MarkdownItPlugin<HeadersPluginOptions> = (
  md,
  {
    level = [2, 3],
    shouldAllowNested = false,
    slugify = defaultSlugify,
    format,
  } = {},
) => {
  // extract headers to env
  const render = md.renderer.render.bind(md.renderer);
  md.renderer.render = (tokens, options, env = {}) => {
    env.headers = resolveHeadersFromTokens(tokens, {
      level,
      shouldAllowHtml: false,
      shouldAllowNested,
      shouldEscapeText: false,
      slugify,
      format,
    });
    return render(tokens, options, env);
  };
};
