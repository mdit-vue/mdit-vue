import { resolveTitleFromToken } from '@mdit-vue/shared';
import type { MarkdownItEnv } from '@mdit-vue/types';
import type MarkdownIt from 'markdown-it';

/**
 * Get markdown page title info
 *
 * Extract it into env
 */
export const titlePlugin: MarkdownIt.PluginSimple = (md): void => {
  // extract title to env
  const render = md.renderer.render.bind(md.renderer);
  md.renderer.render = (tokens, options, env: MarkdownItEnv) => {
    const tokenIdx = tokens.findIndex((token) => token.tag === 'h1');
    env.title =
      tokenIdx > -1
        ? resolveTitleFromToken(tokens[tokenIdx + 1], {
            shouldAllowHtml: false,
            shouldEscapeText: false,
          })
        : '';
    return render(tokens, options, env);
  };
};
