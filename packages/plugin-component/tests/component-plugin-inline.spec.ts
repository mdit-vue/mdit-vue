import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import {
  TAGS_BLOCK,
  TAGS_INLINE,
  TAGS_VUE_RESERVED,
  componentPlugin,
} from '../src/index.js';
import { createInlineTestCases } from './create-inline-test-cases.js';

const FORCE_NON_INLINE_TAGS = [...TAGS_VUE_RESERVED, ...TAGS_BLOCK, 'script'];
const INLINE_TAGS = TAGS_INLINE.filter(
  (item) => !FORCE_NON_INLINE_TAGS.includes(item),
);

describe('should render html inline tags correctly', () => {
  const md = MarkdownIt({ html: true }).use(componentPlugin);
  const testCases = createInlineTestCases(INLINE_TAGS);
  testCases.forEach(({ name, cases }) => {
    describe(name, () => {
      cases.forEach(([source, expected], index) => {
        it(`case ${index}`, () => {
          const rendered = md.render(source);
          expect(rendered).toBe(expected);
        });
      });
    });
  });
});

it('should render invalid html inline tags correctly', () => {
  const md = MarkdownIt({ html: true }).use(componentPlugin);

  const source = ['<1 />', '<中文 />', '<@foo />'].join('\n\n');
  const expected =
    ['&lt;1 /&gt;', '&lt;中文 /&gt;', '&lt;@foo /&gt;']
      .map((item) => `<p>${item}</p>`)
      .join('\n') + '\n';

  const rendered = md.render(source);
  expect(rendered).toBe(expected);
});
