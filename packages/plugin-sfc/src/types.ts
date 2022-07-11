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
    sfcBlocks?: string[];
  }
}
