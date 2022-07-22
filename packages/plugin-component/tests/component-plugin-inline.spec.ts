import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import {
  TAGS_BLOCK,
  TAGS_INLINE,
  TAGS_VUE_RESERVED,
  componentPlugin,
} from '../src/index.js';
import { createInlineTestCases } from './create-inline-test-cases.js';

const forceNonInlineTags = [...TAGS_VUE_RESERVED, ...TAGS_BLOCK, 'script'];
const inlineTags = TAGS_INLINE.filter(
  (item) => !forceNonInlineTags.includes(item),
);

describe('@mdit-vue/plugin-component > component-plugin', () => {
  describe('should render html inline tags correctly', () => {
    const md = MarkdownIt({ html: true }).use(componentPlugin);
    const testCases = createInlineTestCases(inlineTags);
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
});
