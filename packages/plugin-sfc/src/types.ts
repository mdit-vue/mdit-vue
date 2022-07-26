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

/**
 * SFC block that extracted from markdown
 */
export interface SfcBlock {
  /**
   * The type of the block
   */
  type: string;

  /**
   * The content, including open-tag and close-tag
   */
  content: string;

  /**
   * The content that stripped open-tag and close-tag off
   */
  contentStripped: string;

  /**
   * The open-tag
   */
  tagOpen: string;

  /**
   * The close-tag
   */
  tagClose: string;
}

export interface MarkdownSfcBlocks {
  template: SfcBlock | null;
  script: SfcBlock | null;
  scriptSetup: SfcBlock | null;
  styles: SfcBlock[];
  customBlocks: SfcBlock[];
}

declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    /**
     * SFC blocks that extracted by `@mdit-vue/plugin-sfc`
     */
    sfcBlocks?: MarkdownSfcBlocks;
  }
}
