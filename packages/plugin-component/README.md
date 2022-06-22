# @mdit-vue/plugin-component

A [markdown-it](https://github.com/markdown-it/markdown-it) plugin to treat unknown HTML tags as Vue custom components.

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
