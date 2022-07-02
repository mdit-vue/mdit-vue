# @mdit-vue/plugin-sfc

[![npm](https://badgen.net/npm/v/@mdit-vue/plugin-sfc)](https://www.npmjs.com/package/@mdit-vue/plugin-sfc)
[![license](https://badgen.net/github/license/mdit-vue/mdit-vue)](https://github.com/mdit-vue/mdit-vue/blob/main/LICENSE)

A [markdown-it](https://github.com/markdown-it/markdown-it) plugin to help transforming markdown to [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html).

- Extract all SFC blocks except `<template>` from rendered result to markdown-it `env.sfcBlocks`.
- Support extracting custom blocks.

## Install

```sh
npm i @mdit-vue/plugin-sfc
```

## Usage

This plugin will only take effects when the `html` option of markdown-it is enabled:

```ts
import MarkdownIt from 'markdown-it';
import { sfcPlugin } from '@mdit-vue/plugin-sfc';
import type { MarkdownItEnv } from '@mdit-vue/shared';

const md = MarkdownIt({ html: true }).use(sfcPlugin, {
  // options
});
const env: MarkdownItEnv = {};

const rendered = md.render(
  `\
# foo

<script>
console.log('bar')
</script>
`,
  env,
);

const sfc = `<template>${rendered}</template>${env.sfcBlocks}`;
```

## Options

### customBlocks

- Type: `string[]`

- Default: `[]`

- Details:

  SFC custom blocks to be extracted.

  By default, only `<script>` and `<style>` tags will be extracted. You can set this option to support SFC custom blocks in markdown.

  For example, if you set this option to `['foo']`, the `<foo>` tag in your markdown content will also be extracted to `env.sfcBlocks` and won't appear in the rendered result.
