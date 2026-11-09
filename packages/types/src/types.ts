import type { MarkdownIt } from 'markdown-it';

export type MarkdownItBlockRule = Parameters<
  MarkdownIt['block']['ruler']['push']
>[1];

export type MarkdownItInlineRule = Parameters<
  MarkdownIt['inline']['ruler']['push']
>[1];

export type MarkdownItPlugin<Options = void> = (
  md: MarkdownIt,
  options?: Options,
) => void;

export interface MarkdownItHeader {
  /**
   * The level of the header
   *
   * `1` to `6` for `<h1>` to `<h6>`
   */
  level: number;

  /**
   * The title of the header
   */
  title: string;

  /**
   * The slug of the header
   *
   * Typically the `id` attr of the header anchor
   */
  slug: string;

  /**
   * Link of the header
   *
   * Typically using `#${slug}` as the anchor hash
   */
  link: string;

  /**
   * The children of the header
   */
  children: MarkdownItHeader[];
}
