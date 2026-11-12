import type { Env } from 'markdown-it';
import MarkdownIt from 'markdown-it';
import { expect, test } from 'vitest';

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

test('should extract default sfc blocks correctly', () => {
  const md = new MarkdownIt({ html: true }).use(sfcPlugin);
  const env: Env = {};

  const rendered = md.render(source, env);

  expect(rendered).toMatchSnapshot('rendered');
  expect(env.sfcBlocks).toMatchSnapshot('sfc blocks');
});

test('should extract custom blocks correctly', () => {
  const md = new MarkdownIt({ html: true }).use(sfcPlugin, {
    customBlocks: ['docs'],
  });
  const env: Env = {};

  const rendered = md.render(source, env);

  expect(rendered).toMatchSnapshot('rendered');
  expect(env.sfcBlocks).toMatchSnapshot('sfc blocks');
});
