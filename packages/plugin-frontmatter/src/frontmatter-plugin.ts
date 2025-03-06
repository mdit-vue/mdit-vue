import type { MarkdownItEnv } from '@mdit-vue/types';
import grayMatter from 'gray-matter';
import type { PluginWithOptions } from 'markdown-it';
import type { FrontmatterPluginOptions } from './types.js';

/**
 * Get markdown frontmatter and excerpt
 *
 * Extract them into env
 */
export const frontmatterPlugin: PluginWithOptions<FrontmatterPluginOptions> = (
  md,
  { grayMatterOptions, renderExcerpt = true } = {},
): void => {
  const parse = md.parse.bind(md);
  md.parse = (src, env: MarkdownItEnv = {}) => {
    const { data, content, excerpt = '' } = grayMatter(src, grayMatterOptions);

    // extract stripped content
    env.content = content;

    // extract frontmatter
    env.frontmatter = {
      // allow providing default value
      ...env.frontmatter,
      ...data,
    };

    // render and extract excerpt
    env.excerpt =
      renderExcerpt && excerpt
        ? // render the excerpt with original markdown-it render method.
          // here we spread `env` to avoid mutating the original object.
          // using deep clone might be a safer choice.
          md.render(excerpt, { ...env })
        : // use the raw excerpt directly
          excerpt;

    return parse(content, env);
  };
};
