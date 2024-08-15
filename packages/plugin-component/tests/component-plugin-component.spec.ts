import { camelize, capitalize } from '@vue/shared';
import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import { TAGS_VUE_RESERVED, componentPlugin } from '../src/index.js';
import { createComponentTestCases } from './create-component-test-cases.js';

const KEBAB_CASE_COMPONENT_TAGS = [
  'foo-bar',
  'v-123',
  'div-custom',
  'divleading',
  'span-custom',
  'spanleading',
  ...TAGS_VUE_RESERVED,
];
const CAMEL_CASE_COMPONENT_TAGS = KEBAB_CASE_COMPONENT_TAGS.map(camelize);
const PASCAL_CASE_COMPONENT_TAGS = CAMEL_CASE_COMPONENT_TAGS.map(capitalize);
const COMPONENT_TAGS = [
  ...KEBAB_CASE_COMPONENT_TAGS,
  ...CAMEL_CASE_COMPONENT_TAGS,
  ...PASCAL_CASE_COMPONENT_TAGS,
];

describe('@mdit-vue/plugin-component > component-plugin', () => {
  describe('should render component tags correctly', () => {
    const md = MarkdownIt({ html: true }).use(componentPlugin);
    const testCases = createComponentTestCases(COMPONENT_TAGS);
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

  describe('should not render component tags if `html` option is disabled', () => {
    const md = MarkdownIt({ html: false }).use(componentPlugin);
    COMPONENT_TAGS.forEach((comp, index) => {
      it(`case ${index}`, () => {
        const source = `<${comp}>foobar</${comp}>`;
        const expected = `<p>&lt;${comp}&gt;foobar&lt;/${comp}&gt;</p>\n`;
        const rendered = md.render(source);
        expect(rendered).toBe(expected);
      });
    });
  });
});
