/**
 * Options of @mdit-vue/plugin-component
 */
export interface ComponentPluginOptions {
  /**
   * Extra tags to be treated as block tags.
   *
   * @default []
   */
  blockTags?: string[];

  /**
   * Extra tags to be treated as inline tags.
   *
   * @default []
   */
  inlineTags?: string[];
}
