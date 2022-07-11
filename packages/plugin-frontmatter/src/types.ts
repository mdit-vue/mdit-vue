import type { GrayMatterOption } from 'gray-matter';

type GrayMatterOptions = GrayMatterOption<string, GrayMatterOptions>;

/**
 * Options of @mdit-vue/plugin-frontmatter
 */
export interface FrontmatterPluginOptions {
  /**
   * Options of gray-matter
   *
   * @see https://github.com/jonschlinkert/gray-matter#options
   */
  grayMatterOptions?: GrayMatterOptions;

  /**
   * Render the excerpt or not
   */
  renderExcerpt?: boolean;
}

declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    excerpt?: string;
    frontmatter?: Record<string, unknown>;
  }
}
