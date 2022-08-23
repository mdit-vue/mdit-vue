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
    // no attr
    [`<${comp} />`, `<${comp} />`],
    [`<${comp}\n/>`, `<p><${comp}\n/></p>\n`],
    // single attr
    [`<${comp} :prop-name="prop" />`, `<${comp} :prop-name="prop" />`],
    [
      `<${comp}\n:prop-name="prop" />`,
      `<p><${comp}\n:prop-name="prop" /></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n/>`,
      `<p><${comp}\n:prop-name="prop"\n/></p>\n`,
    ],
    [`<${comp} @click="onClick" />`, `<${comp} @click="onClick" />`],
    [`<${comp}\n@click="onClick" />`, `<p><${comp}\n@click="onClick" /></p>\n`],
    [
      `<${comp}\n@click="onClick"\n/>`,
      `<p><${comp}\n@click="onClick"\n/></p>\n`,
    ],
    // multiple attrs
    [
      `<${comp} :prop-name="prop" @click="onClick" />`,
      `<${comp} :prop-name="prop" @click="onClick" />`,
    ],
    [
      `<${comp} :prop-name="prop"\n@click="onClick" />`,
      `<p><${comp} :prop-name="prop"\n@click="onClick" /></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n@click="onClick" />`,
      `<p><${comp}\n:prop-name="prop"\n@click="onClick" /></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"\n@click="onClick"\n/>`,
      `<p><${comp} :prop-name="prop"\n@click="onClick"\n/></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n@click="onClick"\n/>`,
      `<p><${comp}\n:prop-name="prop"\n@click="onClick"\n/></p>\n`,
    ],
    // inside header
    [`# h1 <${comp} />`, `<h1>h1 <${comp} /></h1>\n`],
    [
      `# h1 <${comp} :prop-name="prop" />`,
      `<h1>h1 <${comp} :prop-name="prop" /></h1>\n`,
    ],
    [
      `# h1 <${comp} @click="onClick" />`,
      `<h1>h1 <${comp} @click="onClick" /></h1>\n`,
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
    [`<${comp}>\n</${comp}>`, `<${comp}>\n</${comp}>`],
    [
      `<${comp} :prop-name="prop"></${comp}>`,
      `<p><${comp} :prop-name="prop"></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop">\n</${comp}>`,
      `<${comp} :prop-name="prop">\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"></${comp}>`,
      `<p><${comp}\n:prop-name="prop"></${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n></${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote>\n</${comp}></blockquote>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\n</${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote></blockquote>\n</${comp}>`,
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
    [`<${comp}>foobar\n</${comp}>`, `<p><${comp}>foobar\n</${comp}></p>\n`],
    [`<${comp}>\nfoobar</${comp}>`, `<${comp}>\nfoobar</${comp}>`],
    [`<${comp}>\nfoobar\n</${comp}>`, `<${comp}>\nfoobar\n</${comp}>`],
    [
      `<${comp} :prop-name="prop">foobar</${comp}>`,
      `<p><${comp} :prop-name="prop">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop">foobar\n</${comp}>`,
      `<p><${comp} :prop-name="prop">foobar\n</${comp}></p>\n`,
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
      `<p><${comp}\n:prop-name="prop">foobar</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">foobar\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop">foobar\n</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\nfoobar</${comp}>`,
      `<p><${comp}\n:prop-name="prop">\nfoobar</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\nfoobar\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop">\nfoobar\n</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>foobar</${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote>\n<p>foobar</${comp}></p>\n</blockquote>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\nfoobar</${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote></blockquote>\n<p>foobar</${comp}></p>\n`,
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
      `<${comp}><span>foobar</span>\n</${comp}>`,
      `<p><${comp}><span>foobar</span>\n</${comp}></p>\n`,
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
      `<${comp}>\n<p><span>foobar</span>\n</${comp}></p>\n`,
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
      `<${comp} :prop-name="prop"><span>foobar\n</span></${comp}>`,
      `<p><${comp} :prop-name="prop"><span>foobar\n</span></${comp}></p>\n`,
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
      `<p><${comp}\n:prop-name="prop"><span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"><span>foobar</span>\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop"><span>foobar</span>\n</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<span>foobar</span></${comp}>`,
      `<p><${comp}\n:prop-name="prop">\n<span>foobar</span></${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<span>foobar</span>\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop">\n<span>foobar</span>\n</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n\n<span>foobar</span>\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop"></p>\n<p><span>foobar</span>\n</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n\n<span>foobar</span>\n\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop"></p>\n<p><span>foobar</span></p>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n><span>foobar</span></${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote>\n<p><span>foobar</span></${comp}></p>\n</blockquote>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\n<span>foobar</span></${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote></blockquote>\n<p><span>foobar</span></${comp}></p>\n`,
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
      `<${comp}><div>foobar</div>\n</${comp}>`,
      `<p><${comp}><div>foobar</div>\n</${comp}></p>\n`,
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
      `<p><${comp} :prop-name="prop"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop"><div>foobar</div>\n</${comp}>`,
      `<p><${comp} :prop-name="prop"><div>foobar</div>\n</${comp}></p>\n`,
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
      `<p><${comp}\n:prop-name="prop"><div>foobar</div></${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"><div>foobar</div>\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop"><div>foobar</div>\n</${comp}></p>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<div>foobar</div></${comp}>`,
      `<p><${comp}\n:prop-name="prop"></p>\n<div>foobar</div></${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n<div>foobar</div>\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop"></p>\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop">\n\n<div>foobar</div>\n</${comp}>`,
      `<p><${comp}\n:prop-name="prop"></p>\n<div>foobar</div>\n</${comp}>`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n><div>foobar</div></${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote>\n<div>foobar</div></${comp}></blockquote>\n`,
    ],
    [
      `<${comp}\n:prop-name="prop"\n>\n<div>foobar</div></${comp}>`,
      `<p>&lt;${comp}\n:prop-name=&quot;prop&quot;</p>\n<blockquote></blockquote>\n<div>foobar</div></${comp}>`,
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

    // IMPORTANT:
    // An inline tag at the beginning will not terminate parsing of the line,
    // and the line will be wrapped with a `<p>` tag as usual.
    [
      `<${comp} /> [foo](https://github.com/)`,
      `<p><${comp} /> <a href="https://github.com/">foo</a></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick" /> [foo](https://github.com/)`,
      `<p><${comp} :prop-name="prop" @click="onClick" /> <a href="https://github.com/">foo</a></p>\n`,
    ],
    [
      `<${comp}>foobar</${comp}> [foo](https://github.com/)`,
      `<p><${comp}>foobar</${comp}> <a href="https://github.com/">foo</a></p>\n`,
    ],
    [
      `<${comp} :prop-name="prop" @click="onClick">foobar</${comp}> [foo](https://github.com/)`,
      `<p><${comp} :prop-name="prop" @click="onClick">foobar</${comp}> <a href="https://github.com/">foo</a></p>\n`,
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
      `- <${comp} :prop-name="prop" @click="onClick" /> [foo](https://github.com/)`,
      `\
<ul>
<li><${comp} :prop-name="prop" @click="onClick" /> <a href="https://github.com/">foo</a></li>
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
    [
      `- <${comp} :prop-name="prop" @click="onClick">foobar</${comp}> [foo](https://github.com/)`,
      `\
<ul>
<li><${comp} :prop-name="prop" @click="onClick">foobar</${comp}> <a href="https://github.com/">foo</a></li>
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
