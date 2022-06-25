/**
 * Options of @mdit-vue/plugin-toc
 */

export interface TocPluginOptions {
  /**
   * The pattern serving as the TOC placeholder in your markdown
   */
  pattern?: RegExp;

  /**
   * A custom slugification function
   *
   * Should use the same slugify function with markdown-it-anchor
   * to ensure the link is matched
   */
  slugify?: (str: string) => string;

  /**
   * A function for formatting headings
   */
  format?: (str: string) => string;

  /**
   * Heading level that going to be included in the TOC
   *
   * Should be a subset of markdown-it-anchor's `level` option
   * to ensure the link is existed
   */
  level?: number[];

  /**
   * HTML tag of the TOC container
   */
  containerTag?: string;

  /**
   * The class for the TOC container
   */
  containerClass?: string;

  /**
   * HTML tag of the TOC list
   */
  listTag?: 'ul' | 'ol';

  /**
   * The class for the TOC list
   */
  listClass?: string;

  /**
   * The class for the `<li>` tag
   */
  itemClass?: string;

  /**
   * The tag of the link inside `<li>` tag
   */
  linkTag?: 'a' | 'router-link';

  /**
   * The class for the link inside the `<li>` tag
   */
  linkClass?: string;
}
