# @mdit-vue/types

[![npm](https://badgen.net/npm/v/@mdit-vue/types)](https://www.npmjs.com/package/@mdit-vue/types)

Shared types definition of mdit-vue.

## Install

```sh
npm i @mdit-vue/types
```

## Usage

Define a markdown-it plugin with optional typed options:

```ts
import type { MarkdownItPlugin } from '@mdit-vue/types';

interface PluginOptions {
  breaks?: boolean;
}

const plugin: MarkdownItPlugin<PluginOptions> = (
  md,
  { breaks = false } = {},
) => {
  md.set({ breaks });
};
```

Use `MarkdownItBlockRule` and `MarkdownItInlineRule` for block and inline parser
rules. Both types are derived from markdown-it's native ruler signatures.

Add more properties to `env` via [TypeScript module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation):

```ts
import type { Env } from 'markdown-it';
import MarkdownIt from 'markdown-it';

declare module 'markdown-it' {
  interface Env {
    foo?: string[];
  }
}

const md = new MarkdownIt({ html: true });
const env: Env = {};
const rendered = md.render('raw markdown text', env);
```
