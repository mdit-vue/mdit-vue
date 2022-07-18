/**
 * Options of @mdit-vue/plugin-sfc
 */
export interface SfcPluginOptions {
  /**
   * Custom blocks to be extracted
   *
   * @default []
   */
  customBlocks?: string[];
}

declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    /**
     * The rendered HTML string of SFC blocks that extracted by `@mdit-vue/plugin-sfc`
     */
    sfcBlocks?: string[];
  }
}
