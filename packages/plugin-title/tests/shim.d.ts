// TODO: markdown-it-emoji v3 is not typed correctly for now
declare module 'markdown-it-emoji' {
  import type { PluginSimple } from 'markdown-it';

  const bare: PluginSimple;
  const light: PluginSimple;
  const full: PluginSimple;

  export { bare, light, full };
}
