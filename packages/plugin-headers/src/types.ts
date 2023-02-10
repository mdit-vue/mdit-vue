import type { MarkdownItHeader } from '@mdit-vue/types';

export type { MarkdownItHeader };

/**
 * Options of @mdit-vue/plugin-headers
 */
export interface HeadersPluginOptions {
  /**
   * A custom slugification function
   *
   * Should use the same slugify function with markdown-it-anchor
   * to ensure the link is matched
   */
  slugify?: (str: string) => string;

  /**
   * A function for formatting header title
   */
  format?: (str: string) => string;

  /**
   * Heading level that going to be extracted
   *
   * Should be a subset of markdown-it-anchor's `level` option
   * to ensure the slug is existed
   *
   * @default [2,3]
   */
  level?: number[];

  /**
   * Should allow headers inside nested blocks or not
   *
   * If set to `true`, headers inside blockquote, list, etc. would also be extracted.
   *
   * @default false
   */
  shouldAllowNested?: boolean;
}

declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    /**
     * The headers that extracted by `@mdit-vue/plugin-headers`
     */
    headers?: MarkdownItHeader[];
  }
}
