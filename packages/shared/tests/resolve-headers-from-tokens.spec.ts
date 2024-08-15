import type { MarkdownItHeader } from '@mdit-vue/types';
import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import { resolveHeadersFromTokens, slugify } from '../src/index.js';

const md = MarkdownIt();

it('should resolve headers correctly', () => {
  const source = `\
# h1
## h2
### h3
#### h4
##### h5
###### h6
`;
  const tokens = md.parse(source, {});
  const expected: MarkdownItHeader[] = [
    {
      level: 1,
      title: 'h1',
      slug: 'h1',
      link: '#h1',
      children: [
        {
          level: 2,
          title: 'h2',
          slug: 'h2',
          link: '#h2',
          children: [
            {
              level: 3,
              title: 'h3',
              slug: 'h3',
              link: '#h3',
              children: [
                {
                  level: 4,
                  title: 'h4',
                  slug: 'h4',
                  link: '#h4',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  expect(
    resolveHeadersFromTokens(tokens, {
      level: [1, 2, 3, 4],
      slugify,
      shouldAllowHtml: false,
      shouldAllowNested: false,
      shouldEscapeText: false,
    }),
  ).toEqual(expected);
});

describe('shouldAllowNested', () => {
  const source = `\
> # h1 in blockquote
> ## h2 in blockquote

- # h1 in list
- ## h2 in list

# h1 outside nested blocks
## h2 outside nested blocks
`;
  const tokens = md.parse(source, {});

  it('should not resolve headers in nested blocks', () => {
    const expected: MarkdownItHeader[] = [
      {
        level: 1,
        title: 'h1 outside nested blocks',
        slug: 'h1-outside-nested-blocks',
        link: '#h1-outside-nested-blocks',
        children: [
          {
            level: 2,
            title: 'h2 outside nested blocks',
            slug: 'h2-outside-nested-blocks',
            link: '#h2-outside-nested-blocks',
            children: [],
          },
        ],
      },
    ];

    expect(
      resolveHeadersFromTokens(tokens, {
        level: [1, 2, 3, 4],
        slugify,
        shouldAllowHtml: false,
        shouldAllowNested: false,
        shouldEscapeText: false,
      }),
    ).toEqual(expected);
  });

  it('should resolve headers in nested blocks', () => {
    const expected: MarkdownItHeader[] = [
      {
        level: 1,
        title: 'h1 in blockquote',
        slug: 'h1-in-blockquote',
        link: '#h1-in-blockquote',
        children: [
          {
            level: 2,
            title: 'h2 in blockquote',
            slug: 'h2-in-blockquote',
            link: '#h2-in-blockquote',
            children: [],
          },
        ],
      },
      {
        level: 1,
        title: 'h1 in list',
        slug: 'h1-in-list',
        link: '#h1-in-list',
        children: [
          {
            level: 2,
            title: 'h2 in list',
            slug: 'h2-in-list',
            link: '#h2-in-list',
            children: [],
          },
        ],
      },
      {
        level: 1,
        title: 'h1 outside nested blocks',
        slug: 'h1-outside-nested-blocks',
        link: '#h1-outside-nested-blocks',
        children: [
          {
            level: 2,
            title: 'h2 outside nested blocks',
            slug: 'h2-outside-nested-blocks',
            link: '#h2-outside-nested-blocks',
            children: [],
          },
        ],
      },
    ];

    expect(
      resolveHeadersFromTokens(tokens, {
        level: [1, 2, 3, 4],
        slugify,
        shouldAllowHtml: false,
        shouldAllowNested: true,
        shouldEscapeText: false,
      }),
    ).toEqual(expected);
  });
});
