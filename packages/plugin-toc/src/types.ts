/**
 * Options of @mdit-vue/plugin-toc
 */
export interface TocPluginOptions {
  /**
   * The pattern serving as the TOC placeholder in your markdown
   *
   * @default /^\[\[toc\]\]$/i
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
   *
   * @default [2,3]
   */
  level?: number[];

  /**
   * HTML tag of the TOC container
   *
   * @default 'nav'
   */
  containerTag?: string;

  /**
   * The class for the TOC container
   *
   * @default 'table-of-contents'
   */
  containerClass?: string;

  /**
   * HTML tag of the TOC list
   *
   * @default 'ul'
   */
  listTag?: 'ul' | 'ol';

  /**
   * The class for the TOC list
   *
   * @default ''
   */
  listClass?: string;

  /**
   * The class for the `<li>` tag
   *
   * @default ''
   */
  itemClass?: string;

  /**
   * The tag of the link inside `<li>` tag
   *
   * @default 'a'
   */
  linkTag?: 'a' | 'router-link';

  /**
   * The class for the link inside the `<li>` tag
   *
   * @default ''
   */
  linkClass?: string;
}
