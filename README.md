<p align="center">
  <a href="https://github.com/mdit-vue/mdit-vue" target="_blank">
    <img width="220" src="https://avatars.githubusercontent.com/u/107597382" alt="mdit-vue">
  </a>
</p>

<h1 align="center">
  mdit-vue
</h1>

<p align="center">
  <a href="https://github.com/mdit-vue/mdit-vue/actions/workflows/check.yml" target="_blank">
    <img src="https://github.com/mdit-vue/mdit-vue/actions/workflows/check.yml/badge.svg?branch=main" alt="github check">
  </a>
  <a href="https://coveralls.io/github/mdit-vue/mdit-vue?branch=main" target="_blank">
    <img src="https://coveralls.io/repos/github/mdit-vue/mdit-vue/badge.svg?branch=main" alt="coverage">
  </a>
  <a href="https://github.com/mdit-vue/mdit-vue/blob/main/LICENSE" target="_blank">
    <img src="https://badgen.net/github/license/mdit-vue/mdit-vue" alt="license">
  </a>
</p>

> [markdown-it](https://github.com/markdown-it/markdown-it) plugins for [Vue.js](https://github.com/vuejs/core)

## Why?

As we know, [Markdown](https://www.markdownguide.org/getting-started/) could be converted into HTML, and raw HTML is supported by most of the Markdown parsers.

Since the [Vue template syntax](https://vuejs.org/guide/essentials/template-syntax.html) is HTML-based, and all Vue templates are syntactically valid HTML, it's quite straight forward to think that we could use Vue template syntax in [Markdown](https://en.wikipedia.org/wiki/Markdown).

Unlike [JSX](https://reactjs.org/docs/introducing-jsx.html), Vue template syntax is naturally compatible with Markdown syntax, so we don't have to make lots of extensions or limitations to Markdown syntax like [MDX](https://mdxjs.com/). However, we still need to make some modifications to the parser so that Markdown could have more fun with Vue.

There has been lots of projects that built with this idea, but they are using different ways to modify the Markdown parsers. Most of them don't strictly follow the [Markdown specification](https://commonmark.org/) and have various minor errors.

This project is here to provide some unified plugins for [markdown-it](https://github.com/markdown-it/markdown-it), one of the most popular markdown parsers in JS world, to make it work better with Vue.

## Packages

| Package                                                     | Version (click for changelogs)                                                                                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [@mdit-vue/plugin-component](packages/plugin-component)     | [![plugin-component version](https://badgen.net/npm/v/@mdit-vue/plugin-component)](packages/plugin-component/CHANGELOG.md)       |
| [@mdit-vue/plugin-frontmatter](packages/plugin-frontmatter) | [![plugin-frontmatter version](https://badgen.net/npm/v/@mdit-vue/plugin-frontmatter)](packages/plugin-frontmatter/CHANGELOG.md) |
| [@mdit-vue/plugin-headers](packages/plugin-headers)         | [![plugin-headers version](https://badgen.net/npm/v/@mdit-vue/plugin-headers)](packages/plugin-headers/CHANGELOG.md)             |
| [@mdit-vue/plugin-sfc](packages/plugin-sfc)                 | [![plugin-sfc version](https://badgen.net/npm/v/@mdit-vue/plugin-sfc)](packages/plugin-sfc/CHANGELOG.md)                         |
| [@mdit-vue/plugin-title](packages/plugin-title)             | [![plugin-title version](https://badgen.net/npm/v/@mdit-vue/plugin-title)](packages/plugin-title/CHANGELOG.md)                   |
| [@mdit-vue/plugin-toc](packages/plugin-toc)                 | [![plugin-toc version](https://badgen.net/npm/v/@mdit-vue/plugin-title)](packages/plugin-toc/CHANGELOG.md)                       |

## Who is using?

This project was originally extracted from Vue's official project, and maintained by Vue team members. It is supporting many awesome projects:

- [Slidev](https://github.com/slidevjs/slidev)
- [VuePress v2](https://github.com/vuepress/vuepress-next)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- ... and so on

## License

[MIT](https://github.com/mdit-vue/mdit-vue/blob/main/LICENSE) &copy; [mdit-vue Contributors](https://github.com/mdit-vue/mdit-vue/graphs/contributors)
