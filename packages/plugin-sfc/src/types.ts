/**
 * Options of @mdit-vue/plugin-sfc
 */
export interface SfcPluginOptions {
  /**
   * Custom blocks to be extracted
   */
  customBlocks?: string[];
}

declare module '@mdit-vue/shared' {
  interface MarkdownItEnv {
    sfcBlocks?: string[];
  }
}
