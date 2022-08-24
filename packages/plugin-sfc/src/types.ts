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
  /**
   * The `<template>` block
   */
  template: SfcBlock | null;

  /**
   * The common `<script>` block
   */
  script: SfcBlock | null;

  /**
   * The `<script setup>` block
   */
  scriptSetup: SfcBlock | null;

  /**
   * All `<script>` blocks.
   *
   * By default, SFC only allows one `<script>` block and one `<script setup>` block.
   * However, some tools may support different types of `<script>`s, so we keep all of them here.
   */
  scripts: SfcBlock[];

  /**
   * All `<style>` blocks.
   */
  styles: SfcBlock[];

  /**
   * All custom blocks.
   */
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
