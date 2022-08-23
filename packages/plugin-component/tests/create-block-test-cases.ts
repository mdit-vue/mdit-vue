import type { ComponentPluginTestCases } from './types.js';

/**
 * self-closing
 *
 * @example
 * <FooBar />
 */
const createSelfClosingTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `self closing <${comp} />`,
  cases: [
    // no attr
    [`<${comp} />`, `<${comp} />`],
    [`<${comp}\n/>`, `<${comp}\n/>`],
    // single attr
    [`<${comp} :prop-name="prop" />`, `<${comp} :prop-name="prop" />`],
    [`<${comp}\n:prop-name="prop" />`, `<${comp}\n:prop-name="prop" />`],
    [`<${comp}\n:prop-name="prop"\n/>`, `<${comp}\n:prop-name="prop"\n/>`],
    [`<${comp} @click="onClick" />`, `<${comp} @click="onClick" />`],
    [`<${comp}\n@click="onClick" />`, `<${comp}\n@click="onClick" />`],
    [`<${comp}\n@click="onClick"\n/>`, `<${comp}\n@click="onClick"\n/>`],
    // multiple attrs
    [
      `<${comp} :prop-name="prop" @click="onClick" />`,
      `<${comp} :prop-name="prop" @click="onClick" />`,
    ],
    [
      `<${comp} :prop-name="prop"\n@click="onClick" />`,
      `<${comp} :prop-name="prop"\n@click="onClick" />`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n@click="onClick" />`,
      `<${comp}\n:prop-name="prop"\n@click="onClick" />`,
    ],
    [
      `<${comp} :prop-name="prop"\n@click="onClick"\n/>`,
      `<${comp} :prop-name="prop"\n@click="onClick"\n/>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n@click="onClick"\n/>`,
      `<${comp}\n:prop-name="prop"\n@click="onClick"\n/>`,
    ],
    // inside header
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
 * <FooBar></FooBar>
 */
const createEmptyTagsCases = (comp: string): ComponentPluginTestCases => ({
  name: `empty <${comp}>`,
  cases: [
    [`<${comp}></${comp}>`, `<${comp}></${comp}>`],
    [`<${comp}>\n</${comp}>`, `<${comp}>\n</${comp}>`],
    [
      `<${comp} :prop-name="prop"></${comp}>`,
      `<${comp} :prop-name="prop"></${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\n</${comp}>`,
      `<${comp} :prop-name="prop">\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"></${comp}>`,
      `<${comp}\n:prop-name="prop"></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n></${comp}>`,
      `<${comp}\n:prop-name="prop"\n></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\n</${comp}>`,
      `<${comp}\n:prop-name="prop"\n>\n</${comp}>`,
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
 * <FooBar>foobar</FooBar>
 */
const createTextTagsCases = (comp: string): ComponentPluginTestCases => ({
  name: `text <${comp}>`,
  cases: [
    [`<${comp}>foobar</${comp}>`, `<${comp}>foobar</${comp}>`],
    [`<${comp}>foobar\n</${comp}>`, `<${comp}>foobar\n</${comp}>`],
    [`<${comp}>\nfoobar</${comp}>`, `<${comp}>\nfoobar</${comp}>`],
    [`<${comp}>\nfoobar\n</${comp}>`, `<${comp}>\nfoobar\n</${comp}>`],
    [
      `<${comp} :prop-name="prop">foobar</${comp}>`,
      `<${comp} :prop-name="prop">foobar</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">foobar\n</${comp}>`,
      `<${comp} :prop-name="prop">foobar\n</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\nfoobar</${comp}>`,
      `<${comp} :prop-name="prop">\nfoobar</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\nfoobar\n</${comp}>`,
      `<${comp} :prop-name="prop">\nfoobar\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">foobar</${comp}>`,
      `<${comp}\n:prop-name="prop">foobar</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">foobar\n</${comp}>`,
      `<${comp}\n:prop-name="prop">foobar\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\nfoobar</${comp}>`,
      `<${comp}\n:prop-name="prop">\nfoobar</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\nfoobar\n</${comp}>`,
      `<${comp}\n:prop-name="prop">\nfoobar\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>foobar</${comp}>`,
      `<${comp}\n:prop-name="prop"\n>foobar</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>foobar</${comp}>`,
      `<${comp}\n:prop-name="prop"\n>foobar</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\nfoobar</${comp}>`,
      `<${comp}\n:prop-name="prop"\n>\nfoobar</${comp}>`,
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
 * <FooBar><span>foobar</span></FooBar>
 */
const createInlineElementTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `inline element <${comp}>`,
  cases: [
    [
      `<${comp}><span>foobar</span></${comp}>`,
      `<${comp}><span>foobar</span></${comp}>`,
    ],
    [
      `<${comp}><span>foobar</span>\n</${comp}>`,
      `<${comp}><span>foobar</span>\n</${comp}>`,
    ],
    [
      `<${comp}>\n<span>foobar</span></${comp}>`,
      `<${comp}>\n<span>foobar</span></${comp}>`,
    ],
    [
      `<${comp}>\n<span>foobar</span>\n</${comp}>`,
      `<${comp}>\n<span>foobar</span>\n</${comp}>`,
    ],
    [
      `<${comp}>\n\n<span>foobar</span></${comp}>`,
      `<${comp}>\n<p><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp}>\n\n<span>foobar</span>\n</${comp}>`,
      `<${comp}>\n<p><span>foobar</span></p>\n</${comp}>`,
    ],
    [
      `<${comp}>\n\n<span>foobar</span>\n\n</${comp}>`,
      `<${comp}>\n<p><span>foobar</span></p>\n</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop"><span>foobar</span></${comp}>`,
      `<${comp} :prop-name="prop"><span>foobar</span></${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop"><span>foobar\n</span></${comp}>`,
      `<${comp} :prop-name="prop"><span>foobar\n</span></${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\n<span>foobar</span></${comp}>`,
      `<${comp} :prop-name="prop">\n<span>foobar</span></${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\n<span>foobar</span>\n</${comp}>`,
      `<${comp} :prop-name="prop">\n<span>foobar</span>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"><span>foobar</span></${comp}>`,
      `<${comp}\n:prop-name="prop"><span>foobar</span></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"><span>foobar</span>\n</${comp}>`,
      `<${comp}\n:prop-name="prop"><span>foobar</span>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<span>foobar</span></${comp}>`,
      `<${comp}\n:prop-name="prop">\n<span>foobar</span></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<span>foobar</span>\n</${comp}>`,
      `<${comp}\n:prop-name="prop">\n<span>foobar</span>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n\n<span>foobar</span>\n</${comp}>`,
      `<${comp}\n:prop-name="prop">\n<p><span>foobar</span></p>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n\n<span>foobar</span>\n\n</${comp}>`,
      `<${comp}\n:prop-name="prop">\n<p><span>foobar</span></p>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n><span>foobar</span></${comp}>`,
      `<${comp}\n:prop-name="prop"\n><span>foobar</span></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\n<span>foobar</span></${comp}>`,
      `<${comp}\n:prop-name="prop"\n>\n<span>foobar</span></${comp}>`,
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
 * <FooBar><div>foobar</div></FooBar>
 */
const createBlockElementTagsCases = (
  comp: string,
): ComponentPluginTestCases => ({
  name: `block element <${comp}>`,
  cases: [
    [
      `<${comp}><div>foobar</div></${comp}>`,
      `<${comp}><div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}><div>foobar</div>\n</${comp}>`,
      `<${comp}><div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}>\n<div>foobar</div></${comp}>`,
      `<${comp}>\n<div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}>\n<div>foobar</div>\n</${comp}>`,
      `<${comp}>\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}>\n\n<div>foobar</div></${comp}>`,
      `<${comp}>\n<div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}>\n\n<div>foobar</div>\n</${comp}>`,
      `<${comp}>\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}>\n\n<div>foobar</div>\n\n</${comp}>`,
      `<${comp}>\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop"><div>foobar</div></${comp}>`,
      `<${comp} :prop-name="prop"><div>foobar</div></${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop"><div>foobar</div>\n</${comp}>`,
      `<${comp} :prop-name="prop"><div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\n<div>foobar</div></${comp}>`,
      `<${comp} :prop-name="prop">\n<div>foobar</div></${comp}>`,
    ],
    [
      `<${comp} :prop-name="prop">\n<div>foobar</div>\n</${comp}>`,
      `<${comp} :prop-name="prop">\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"><div>foobar</div></${comp}>`,
      `<${comp}\n:prop-name="prop"><div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"><div>foobar</div>\n</${comp}>`,
      `<${comp}\n:prop-name="prop"><div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<div>foobar</div></${comp}>`,
      `<${comp}\n:prop-name="prop">\n<div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<div>foobar</div>\n</${comp}>`,
      `<${comp}\n:prop-name="prop">\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n\n<div>foobar</div>\n</${comp}>`,
      `<${comp}\n:prop-name="prop">\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n><div>foobar</div></${comp}>`,
      `<${comp}\n:prop-name="prop"\n><div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\n<div>foobar</div></${comp}>`,
      `<${comp}\n:prop-name="prop"\n>\n<div>foobar</div></${comp}>`,
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
    [`<${comp}>*foobar*</${comp}>`, `<${comp}>*foobar*</${comp}>`],
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

    // IMPORTANT:
    // A block tag at the beginning will terminate parsing of the line,
    // so the following content will be kept as is.
    [
      `<${comp} /> [foo](https://github.com/)`,
      `<${comp} /> [foo](https://github.com/)`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick" /> [foo](https://github.com/)`,
      `<${comp} :prop-name="prop" @click="onClick" /> [foo](https://github.com/)`,
    ],
    [
      `<${comp}>foobar</${comp}> [foo](https://github.com/)`,
      `<${comp}>foobar</${comp}> [foo](https://github.com/)`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick">foobar</${comp}> [foo](https://github.com/)`,
      `<${comp} :prop-name="prop" @click="onClick">foobar</${comp}> [foo](https://github.com/)`,
    ],
    [
      `- <${comp} /> [foo](https://github.com/)`,
      `\
<ul>
<li>
<${comp} /> [foo](https://github.com/)</li>
</ul>
`,
    ],
    [
      `- <${comp} :prop-name="prop" @click="onClick" /> [foo](https://github.com/)`,
      `\
<ul>
<li>
<${comp} :prop-name="prop" @click="onClick" /> [foo](https://github.com/)</li>
</ul>
`,
    ],
    [
      `- <${comp}>foobar</${comp}> [foo](https://github.com/)`,
      `\
<ul>
<li>
<${comp}>foobar</${comp}> [foo](https://github.com/)</li>
</ul>
`,
    ],
    [
      `- <${comp} :prop-name="prop" @click="onClick">foobar</${comp}> [foo](https://github.com/)`,
      `\
<ul>
<li>
<${comp} :prop-name="prop" @click="onClick">foobar</${comp}> [foo](https://github.com/)</li>
</ul>
`,
    ],

    // edge case
    // the blockquote should not be terminated
    // and the custom component should be treated as inline tag
    [
      `\
> foo
    <${comp}>foobar</${comp}>
`,
      `\
<blockquote>
<p>foo
<${comp}>foobar</${comp}></p>
</blockquote>
`,
    ],

    // edge case
    // if there is no matching end tag, the block will keep opening
    [
      `\
- <${comp}>
- foo
`,
      `\
<ul>
<li>
<${comp}>
</li>
<li>foo</li>
</ul>
`,
    ],
  ],
});

/**
 * Create test cases with block tags
 */
export const createBlockTestCases = (
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
