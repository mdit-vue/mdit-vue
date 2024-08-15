import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import { TAGS_BLOCK, componentPlugin } from '../src/index.js';
import { createBlockTestCases } from './create-block-test-cases.js';

describe('should render html block tags correctly', () => {
  const md = MarkdownIt({ html: true }).use(componentPlugin);
  const testCases = createBlockTestCases(TAGS_BLOCK);
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

describe('some behaviors of original html block ruler (mainly for coverage purpose)', () => {
  const md = MarkdownIt({ html: true }).use(componentPlugin);
  describe('those html blocks whose ending tag is not required to be followed with an empty line', () => {
    it('ending tag in the same line as starting tag', () => {
      const source = '<pre>foobar</pre>';
      const expected = '<pre>foobar</pre>';
      const rendered = md.render(source);
      expect(rendered).toBe(expected);
    });

    it('ending tag in different line from starting tag', () => {
      const source = '<pre>foobar\n</pre>';
      const expected = '<pre>foobar\n</pre>';
      const rendered = md.render(source);
      expect(rendered).toBe(expected);
    });
  });
});
