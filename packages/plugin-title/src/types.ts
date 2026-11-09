export {};

declare module 'markdown-it' {
  interface Env {
    /**
     * The title that extracted by `@mdit-vue/plugin-title`
     */
    title?: string;
  }
}
