/**
 * Options of @mdit-vue/plugin-component
 */
export interface ComponentPluginOptions {
  /**
   * Extra tags to be treated as block tags.
   *
   * By default, all standard [HTML inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) will be
   * treated as inline tags (excluding [Vue built-in special elements](https://vuejs.org/api/built-in-special-elements.html)).
   *
   * In some cases you might want to force some inline tags to behave like block tags. For example, when you create a Vue component
   * with the same name as a standard HTML inline element (not recommended though).
   *
   * You can use this option to specify standard inline tags as block tags.
   *
   * Notice that this option is case-sensitive, and has higher priority than the `inlineTags` option.
   *
   * @default []
   */
  blockTags?: string[];

  /**
   * Extra tags to be treated as inline tags.
   *
   * By default, only standard [HTML inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) will be
   * treated as inline tags (excluding [Vue built-in special elements](https://vuejs.org/api/built-in-special-elements.html)).
   *
   * All other unknown elements will be treated as block tags, because we are assuming that they are custom Vue components.
   *
   * Treating Vue components as block tags would work as expected in most cases. However, in some edge cases, the behavior
   * of block tags is not ideal with Vue components. For example, when using a HTML block tag at the beginning of a list item,
   * the following Markdown syntax in the same list item will be invalid, but users might want an inline Vue component there.
   *
   * You can use this option to specify unknown tags as inline tags.
   *
   * Notice that this option is case-sensitive, and has lower priority than the `blockTags` option.
   *
   * @default []
   */
  inlineTags?: string[];
}
