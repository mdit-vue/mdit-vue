declare module 'markdown-it-emoji' {
  import type { MarkdownItPlugin } from '@mdit-vue/types';

  interface EmojiOptions {
    defs: Record<string, string>;
    enabled: string[];
    shortcuts: Record<string, string[] | string>;
  }

  type EmojiPlugin = MarkdownItPlugin<Partial<EmojiOptions>>;

  export const bare: EmojiPlugin;
  export const full: EmojiPlugin;
  export const light: EmojiPlugin;
}
