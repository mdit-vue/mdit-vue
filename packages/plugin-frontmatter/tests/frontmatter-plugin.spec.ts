import type { MarkdownItEnv } from '@mdit-vue/types';
import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import type { FrontmatterPluginOptions } from '../src/index.js';
import { frontmatterPlugin } from '../src/index.js';

const TEST_CASES: {
  source: string;
  options: FrontmatterPluginOptions;
  env: MarkdownItEnv;
  content: MarkdownItEnv['content'];
  frontmatter: MarkdownItEnv['frontmatter'];
  excerpt: MarkdownItEnv['excerpt'];
}[] = [
  {
    source: `\
---
str: string
num: 123
date: 2022-07-06
---
`,
    options: {},
    env: {},
    content: '',
    frontmatter: {
      str: 'string',
      num: 123,
      date: new Date('2022-07-06T00:00:00Z'),
    },
    excerpt: '',
  },
  {
    source: `\
---
foo: foo
bar: bar
---
`,
    options: {},
    env: {
      frontmatter: {
        foo: 'default-foo',
        baz: 'default-baz',
      },
    },
    content: '',
    frontmatter: {
      foo: 'foo',
      bar: 'bar',
      baz: 'default-baz',
    },
    excerpt: '',
  },
  {
    source: `\
# Hello, world
---
`,
    options: {},
    env: {},
    content: `\
# Hello, world
---
`,
    frontmatter: {},
    excerpt: '',
  },
  {
    source: `\
---
foo: foo
bar: bar
---
# Hello, world
---
`,
    options: {
      grayMatterOptions: {
        excerpt: true,
      },
      renderExcerpt: true,
    },
    env: {},
    content: `\
# Hello, world
---
`,
    frontmatter: {
      foo: 'foo',
      bar: 'bar',
    },
    excerpt: '<h1>Hello, world</h1>\n',
  },
  {
    source: `\
---
foo: foo
bar: bar
---
# Hello, world
<!-- more -->
`,
    options: {
      grayMatterOptions: {
        excerpt: true,
        excerpt_separator: '<!-- more -->',
      },
      renderExcerpt: true,
    },
    env: {},
    content: `\
# Hello, world
<!-- more -->
`,
    frontmatter: {
      foo: 'foo',
      bar: 'bar',
    },
    excerpt: '<h1>Hello, world</h1>\n',
  },
  {
    source: `\
---
foo: foo
bar: bar
---
# Hello, world
<!-- more -->
`,
    options: {
      grayMatterOptions: {
        excerpt: true,
        excerpt_separator: '<!-- more -->',
      },
      renderExcerpt: false,
    },
    env: {},
    content: `\
# Hello, world
<!-- more -->
`,
    frontmatter: {
      foo: 'foo',
      bar: 'bar',
    },
    excerpt: '# Hello, world\n',
  },
];

describe('@mdit-vue/plugin-frontmatter > frontmatter-plugin', () => {
  TEST_CASES.forEach(
    ({ source, options, env: rawEnv, content, frontmatter, excerpt }, i) => {
      it(`case ${i}`, () => {
        const md = MarkdownIt().use(frontmatterPlugin, options);
        const env: MarkdownItEnv = { ...rawEnv };
        md.render(source, env);
        expect(env.content).toEqual(content);
        expect(env.frontmatter).toEqual(frontmatter);
        expect(env.excerpt).toEqual(excerpt);
      });
    },
  );
});
