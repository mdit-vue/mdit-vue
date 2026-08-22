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

  describe('those html blocks whose end condition is not an empty line', () => {
    it('should not be ended by an empty line inside a list item', () => {
      const source = '- <!--\n  foo\n\n  bar\n  -->\n';
      const expected = '<ul>\n<li>\n<!--\nfoo\n\nbar\n-->\n</li>\n</ul>\n';
      const rendered = md.render(source);
      expect(rendered).toBe(expected);
    });

    it('should be ended by an outdented line inside a list item', () => {
      const source = '- <!--\n  foo\nbar\n-->\n';
      const expected =
        '<ul>\n<li>\n<!--\nfoo\n</li>\n</ul>\n<p>bar\n--&gt;</p>\n';
      const rendered = md.render(source);
      expect(rendered).toBe(expected);
    });
  });
});
