import { camelize, capitalize } from '@vue/shared';
import MarkdownIt from 'markdown-it';
import { describe, expect, it } from 'vitest';
import { TAGS_VUE_RESERVED, componentPlugin } from '../src/index.js';
import { createComponentTestCases } from './create-component-test-cases.js';

const kebabCaseComponentTags = [
  'foo-bar',
  'v-123',
  'div-custom',
  'divleading',
  'span-custom',
  'spanleading',
  ...TAGS_VUE_RESERVED,
];
const camelCaseComponentTags = kebabCaseComponentTags.map(camelize);
const pascalCaseComponentTags = camelCaseComponentTags.map(capitalize);
const componentTags = [
  ...kebabCaseComponentTags,
  ...camelCaseComponentTags,
  ...pascalCaseComponentTags,
];

describe('@mdit-vue/plugin-component > component-plugin', () => {
  describe('should render component tags correctly', () => {
    const md = MarkdownIt({ html: true }).use(componentPlugin);
    const testCases = createComponentTestCases(componentTags);
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
    componentTags.forEach((comp, index) => {
      it(`case ${index}`, () => {
        const source = `<${comp}>foobar</${comp}>`;
        const expected = `<p>&lt;${comp}&gt;foobar&lt;/${comp}&gt;</p>\n`;
        const rendered = md.render(source);
        expect(rendered).toBe(expected);
      });
    });
  });
});
