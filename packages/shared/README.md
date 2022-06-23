# @mdit-vue/shared

[![npm](https://badgen.net/npm/v/@mdit-vue/shared)](https://www.npmjs.com/package/@mdit-vue/plugin-sfc)

Shared utils and types of mdit-vue.

## Install

```sh
npm i @mdit-vue/shared
```

## Usage

```ts
import MarkdownIt from 'markdown-it';
import type { MarkdownItEnv } from '@mdit-vue/shared';

const md = MarkdownIt({ html: true });
const env: MarkdownItEnv = {};
const rendered = md.render('raw markdown text', env);
```
