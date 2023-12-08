// TODO: markdown-it v14 is not typed correctly for now
declare module 'markdown-it/lib/common/html_blocks.mjs' {
  const blockNames: string[];
  export default blockNames;
}
