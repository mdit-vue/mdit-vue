import type { ComponentPluginTestCases } from './types.js';

/**
 * self-closing
 *
 * @example
 * <span />
 */
const createSelfClosingTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `self closing <${comp} />`,
  cases: [
    [`<${comp} />`, `<${comp} />`],
    [`<${comp} :prop-name="prop" />`, `<${comp} :prop-name="prop" />`],
    [`<${comp} @click="onClick" />`, `<${comp} @click="onClick" />`],
    [
      `<${comp} :prop-name="prop" @click="onClick" />`,
      `<${comp} :prop-name="prop" @click="onClick" />`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model" />`,
      `<p><${comp} :prop-name="prop"\nv-model="model" /></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick" />`,
      `<p><${comp} :prop-name="prop"\nv-model="model"\n@click="onClick" /></p>\n`,
    ],
    [`# h1 <${comp} />`, `<h1>h1 <${comp} /></h1>\n`],
    [
      `# h1 <${comp} :prop-name="prop" />`,
      `<h1>h1 <${comp} :prop-name="prop" /></h1>\n`,
    ],
  ],
});

/**
 * empty
 *
 * @example
 * <span></span>
 */
const createEmptyTagsCases = (comp: string): ComponentPluginTestCases => ({
  name: `empty <${comp}>`,
  cases: [
    [`<${comp}></${comp}>`, `<p><${comp}></${comp}></p>\n`],
    [
      `<${comp} :prop-name="prop"></${comp}>`,
      `<p><${comp} :prop-name="prop"></${comp}></p>\n`,
    ],
    [
      `<${comp} @click="onClick"></${comp}>`,
      `<p><${comp} @click="onClick"></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick"></${comp}>`,
      `<p><${comp} :prop-name="prop" @click="onClick"></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"></${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"></${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick">\n</${comp}>`,
      `<${comp} :prop-name="prop" @click="onClick">\n</${comp}>`,
    ],
    [`# h1 <${comp}></${comp}>`, `<h1>h1 <${comp}></${comp}></h1>\n`],
    [
      `# h1 <${comp} :prop-name="prop"></${comp}>`,
      `<h1>h1 <${comp} :prop-name="prop"></${comp}></h1>\n`,
    ],
  ],
});

/**
 * text
 *
 * @example
 * <span>foobar</span>
 */
const createTextTagsCases = (comp: string): ComponentPluginTestCases => ({
  name: `text <${comp}>`,
  cases: [
    [`<${comp}>foobar</${comp}>`, `<p><${comp}>foobar</${comp}></p>\n`],
    [
      `<${comp} :prop-name="prop">foobar</${comp}>`,
      `<p><${comp} :prop-name="prop">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp} @click="onClick">foobar</${comp}>`,
      `<p><${comp} @click="onClick">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick">foobar</${comp}>`,
      `<p><${comp} :prop-name="prop" @click="onClick">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model">foobar</${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick">foobar</${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"\n@click="onClick">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick">\nfoobar\n</${comp}>`,
      `<${comp} :prop-name="prop" @click="onClick">\nfoobar\n</${comp}>`,
    ],
    [
      `# h1 <${comp}>foobar</${comp}>`,
      `<h1>h1 <${comp}>foobar</${comp}></h1>\n`,
    ],
    [
      `# h1 <${comp} :prop-name="prop">foobar</${comp}>`,
      `<h1>h1 <${comp} :prop-name="prop">foobar</${comp}></h1>\n`,
    ],
  ],
});

/**
 * inline element
 *
 * @example
 * <span><span>foobar</span></span>
 */
const createInlineElementTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `inline element <${comp}>`,
  cases: [
    [
      `<${comp}><span>foobar</span></${comp}>`,
      `<p><${comp}><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp}>\n<span>foobar</span>\n</${comp}>`,
      `<${comp}>\n<span>foobar</span>\n</${comp}>`,
    ],
    [
      `<${comp}>\n\n<span>foobar</span>\n\n</${comp}>`,
      `<${comp}>\n<p><span>foobar</span></p>\n</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop"><span>foobar</span></${comp}>`,
      `<p><${comp} :prop-name="prop"><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp} @click="onClick"><span>foobar</span></${comp}>`,
      `<p><${comp} @click="onClick"><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick"><span>foobar</span></${comp}>`,
      `<p><${comp} :prop-name="prop" @click="onClick"><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"><span>foobar</span></${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><span>foobar</span></${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `# h1 <${comp}><span>foobar</span></${comp}>`,
      `<h1>h1 <${comp}><span>foobar</span></${comp}></h1>\n`,
    ],
    [
      `# h1 <${comp} :prop-name="prop"><span>foobar</span></${comp}>`,
      `<h1>h1 <${comp} :prop-name="prop"><span>foobar</span></${comp}></h1>\n`,
    ],
  ],
});

/**
 * block element
 *
 * @example
 * <span><div>foobar</div></span>
 *
 * @remark
 * This is invalid HTML and should be avoided
 */
const createBlockElementTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `block element <${comp}>`,
  cases: [
    [
      `<${comp}><div>foobar</div></${comp}>`,
      `<p><${comp}><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp}>\n<div>foobar</div>\n</${comp}>`,
      `<${comp}>\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop"><div>foobar</div></${comp}>`,
      `<p><${comp} :prop-name="prop"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp} @click="onClick"><div>foobar</div></${comp}>`,
      `<p><${comp} @click="onClick"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick"><div>foobar</div></${comp}>`,
      `<p><${comp} :prop-name="prop" @click="onClick"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"><div>foobar</div></${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><div>foobar</div></${comp}>`,
      `<p><${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `# h1 <${comp}><div>foobar</div></${comp}>`,
      `<h1>h1 <${comp}><div>foobar</div></${comp}></h1>\n`,
    ],
    [
      `# h1 <${comp} :prop-name="prop"><div>foobar</div></${comp}>`,
      `<h1>h1 <${comp} :prop-name="prop"><div>foobar</div></${comp}></h1>\n`,
    ],
  ],
});

/**
 * markdown syntax
 *
 * @example
 * <FooBar>*foobar*</FooBar>
 *
 * <FooBar>
 * - foo
 * - bar
 * </FooBar>
 */
const createMarkdownSyntaxTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `markdown syntax <${comp}>`,
  cases: [
    [
      `<${comp}>*foobar*</${comp}>`,
      `<p><${comp}><em>foobar</em></${comp}></p>\n`,
    ],
    [
      `\
<${comp}>
*foobar*
</${comp}>`,
      `\
<${comp}>
*foobar*
</${comp}>`,
    ],
    [
      `\
<${comp}>

*foobar*

</${comp}>`,
      `\
<${comp}>
<p><em>foobar</em></p>
</${comp}>`,
    ],
    [
      `\
<${comp}>
- foo
- bar
</${comp}>`,
      `\
<${comp}>
- foo
- bar
</${comp}>`,
    ],
    [
      `\
<${comp}>

- foo
- bar

</${comp}>`,
      `\
<${comp}>
<ul>
<li>foo</li>
<li>bar</li>
</ul>
</${comp}>`,
    ],

    // differences from block tags
    // an inline tag at the beginning will not terminate parsing of the line
    [
      `<${comp} /> [foo](https://github.com/)`,
      `<p><${comp} /> <a href="https://github.com/">foo</a></p>\n`,
    ],
    [
      `<${comp}>foobar</${comp}> [foo](https://github.com/)`,
      `<p><${comp}>foobar</${comp}> <a href="https://github.com/">foo</a></p>\n`,
    ],
    [
      `- <${comp} /> [foo](https://github.com/)`,
      `\
<ul>
<li><${comp} /> <a href="https://github.com/">foo</a></li>
</ul>
`,
    ],
    [
      `- <${comp}>foobar</${comp}> [foo](https://github.com/)`,
      `\
<ul>
<li><${comp}>foobar</${comp}> <a href="https://github.com/">foo</a></li>
</ul>
`,
    ],
  ],
});

/**
 * Create test cases with inline tags
 *
 * Notice: if the starting tag and ending tag are in the same line, it will also
 * be treated as block
 */
export const createInlineTestCases = (
  tags: string[],
): ComponentPluginTestCases[] => {
  const testCases: ComponentPluginTestCases[] = [];

  tags.forEach((comp) => {
    testCases.push(
      createSelfClosingTagsCases(comp),
      createEmptyTagsCases(comp),
      createTextTagsCases(comp),
      createInlineElementTagsCases(comp),
      createBlockElementTagsCases(comp),
      createMarkdownSyntaxTagsCases(comp),
    );
  });

  return testCases;
};
