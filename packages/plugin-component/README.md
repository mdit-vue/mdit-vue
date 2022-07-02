# @mdit-vue/plugin-component

[![npm](https://badgen.net/npm/v/@mdit-vue/plugin-component)](https://www.npmjs.com/package/@mdit-vue/plugin-component)
[![license](https://badgen.net/github/license/mdit-vue/mdit-vue)](https://github.com/mdit-vue/mdit-vue/blob/main/LICENSE)

A [markdown-it](https://github.com/markdown-it/markdown-it) plugin to allow Vue components in markdown.

- Treat [vue built-in components](https://vuejs.org/api/built-in-components.html) and unknown HTML tags as vue components (markdown-it would treat them as inline tags by default).
- Allow vue [`@` directive](https://vuejs.org/api/built-in-directives.html#v-on) on native HTML tags.
- With full tests.

## Install

```sh
npm i @mdit-vue/plugin-component
```

## Usage

This plugin will only take effects when the `html` option of markdown-it is enabled:

```ts
import MarkdownIt from 'markdown-it';
import { componentPlugin } from '@mdit-vue/plugin-component';

const md = MarkdownIt({ html: true }).use(componentPlugin);
```
