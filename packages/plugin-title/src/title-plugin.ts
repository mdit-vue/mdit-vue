import { resolveTitleFromToken } from '@mdit-vue/shared';
import type { MarkdownItEnv } from '@mdit-vue/types';
import type { PluginSimple } from 'markdown-it';

/**
 * Get markdown page title info
 *
 * Extract it to env
 */
export const titlePlugin: PluginSimple = (md): void => {
  let title: string;

  // push the rule to the end of the chain
  // resolve title from the parsed tokens
  md.core.ruler.push('resolveTitle', (state) => {
    const tokenIdx = state.tokens.findIndex((token) => token.tag === 'h1');
    if (tokenIdx > -1) {
      title = resolveTitleFromToken(state.tokens[tokenIdx + 1], {
        shouldAllowHtml: false,
        shouldEscapeText: false,
      });
    } else {
      title = '';
    }
    return true;
  });

  // extract title to env
  const render = md.render.bind(md);
  md.render = (src, env: MarkdownItEnv = {}) => {
    const result = render(src, env);
    env.title = title;
    return result;
  };
};
