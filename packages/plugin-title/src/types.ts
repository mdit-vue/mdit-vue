export {};

declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    /**
     * The title that extracted by `@mdit-vue/plugin-title`
     */
    title?: string;
  }
}
