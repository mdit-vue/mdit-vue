import type { MarkdownItEnv } from '@mdit-vue/types';
import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import { sfcPlugin } from '../src';

const source = `\
# hello vuepress

{{ msg }}

<docs>
extra hoisted tag
</docs>

<script>
export default {
  setup() {
    return {
      msg: 'foobar'
    }
  }
}
</script>

<style lang="stylus">
.h1
  red
</style>
`;

const extractedScript = source.replace(/^.*(<script>.*<\/script>).*$/s, '$1\n');
const extractedStyle = source.replace(/^.*(<style .*<\/style>).*$/s, '$1\n');
const extractedDocs = source.replace(/^.*(<docs>.*<\/docs>).*$/s, '$1\n');

describe('@mdit-vue/plugin-sfc > sfc-plugin', () => {
  it('should extract `<script>` and `<style>` tags correctly', () => {
    const md = MarkdownIt({ html: true }).use(sfcPlugin);
    const env: MarkdownItEnv = {};

    const rendered = md.render(source, env);

    expect(env.sfcBlocks).toEqual([extractedScript, extractedStyle]);
    expect(/<(script|style)\b/.test(rendered)).toBe(false);
  });

  it('should extract `<docs>` tags correctly', () => {
    const md = MarkdownIt({ html: true }).use(sfcPlugin, {
      customBlocks: ['docs'],
    });
    const env: MarkdownItEnv = {};

    const rendered = md.render(source, env);

    expect(env.sfcBlocks).toEqual([
      extractedDocs,
      extractedScript,
      extractedStyle,
    ]);
    expect(/<(script|style|docs)\b/.test(rendered)).toBe(false);
  });
});
