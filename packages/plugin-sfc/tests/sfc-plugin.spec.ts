import type { MarkdownItEnv } from '@mdit-vue/types';
import MarkdownIt from 'markdown-it';
import { expect, it } from 'vitest';
import { sfcPlugin } from '../src/index.js';

const source = `\
# hello vuepress

{{ msg }}

<docs>
extra hoisted tag
</docs>

<script setup lang="ts">
const foo = 'scriptSetup'
</script>

<script>
export default {
  setup() {
    return {
      msg: 'script'
    }
  }
}
</script>

<style lang="stylus">
.h1
  red
</style>
`;

it('should extract default sfc blocks correctly', () => {
  const md = MarkdownIt({ html: true }).use(sfcPlugin);
  const env: MarkdownItEnv = {};

  const rendered = md.render(source, env);

  expect(rendered).toMatchSnapshot();
  expect(env.sfcBlocks).toMatchSnapshot();
});

it('should extract custom blocks correctly', () => {
  const md = MarkdownIt({ html: true }).use(sfcPlugin, {
    customBlocks: ['docs'],
  });
  const env: MarkdownItEnv = {};

  const rendered = md.render(source, env);

  expect(rendered).toMatchSnapshot();
  expect(env.sfcBlocks).toMatchSnapshot();
});
