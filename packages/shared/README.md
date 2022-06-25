# @mdit-vue/shared

[![npm](https://badgen.net/npm/v/@mdit-vue/shared)](https://www.npmjs.com/package/@mdit-vue/plugin-sfc)

Shared utils and types of mdit-vue.

## Install

```sh
npm i @mdit-vue/shared
```

## Usage

Add more properties to `env` via [TypeScript module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation):

```ts
declare module '@mdit-vue/shared' {
  interface MarkdownItEnv {
    foo?: string[];
  }
}
```

```ts
import MarkdownIt from 'markdown-it';
import type { MarkdownItEnv } from '@mdit-vue/shared';

const md = MarkdownIt({ html: true });
const env: MarkdownItEnv = {};
const rendered = md.render('raw markdown text', env);
```
