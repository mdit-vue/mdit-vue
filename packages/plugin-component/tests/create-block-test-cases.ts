import type { ComponentPluginTestCases } from './types.js';

/**
 * Create test cases with block tags
 */
export const createBlockTestCases = (
  tags: string[],
): ComponentPluginTestCases[] => {
  const testCases: ComponentPluginTestCases[] = [];

  tags.forEach((comp) => {
    testCases.push(
      /**
       * self closed
       *
       * @example
       * <FooBar />
       */
      {
        name: `self closed <${comp} />`,
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
            `<${comp} :prop-name="prop"\nv-model="model" />`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick" />`,
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick" />`,
          ],
          [`# h1 <${comp} />`, `<h1>h1 <${comp} /></h1>\n`],
          [
            `# h1 <${comp} :prop-name="prop" />`,
            `<h1>h1 <${comp} :prop-name="prop" /></h1>\n`,
          ],
        ],
      },

      /**
       * empty
       *
       * @example
       * <FooBar></FooBar>
       */
      {
        name: `empty <${comp}>`,
        cases: [
          [`<${comp}></${comp}>`, `<${comp}></${comp}>`],
          [
            `<${comp} :prop-name="prop"></${comp}>`,
            `<${comp} :prop-name="prop"></${comp}>`,
          ],
          [
            `<${comp} @click="onClick"></${comp}>`,
            `<${comp} @click="onClick"></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop" @click="onClick"></${comp}>`,
            `<${comp} :prop-name="prop" @click="onClick"></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"></${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"></${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"></${comp}>`,
          ],
          [`# h1 <${comp}></${comp}>`, `<h1>h1 <${comp}></${comp}></h1>\n`],
          [
            `# h1 <${comp} :prop-name="prop"></${comp}>`,
            `<h1>h1 <${comp} :prop-name="prop"></${comp}></h1>\n`,
          ],
        ],
      },

      /**
       * text
       *
       * @example
       * <FooBar>foobar</FooBar>
       */
      {
        name: `text <${comp}>`,
        cases: [
          [`<${comp}>foobar</${comp}>`, `<${comp}>foobar</${comp}>`],
          [
            `<${comp} :prop-name="prop">foobar</${comp}>`,
            `<${comp} :prop-name="prop">foobar</${comp}>`,
          ],
          [
            `<${comp} @click="onClick">foobar</${comp}>`,
            `<${comp} @click="onClick">foobar</${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop" @click="onClick">foobar</${comp}>`,
            `<${comp} :prop-name="prop" @click="onClick">foobar</${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model">foobar</${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model">foobar</${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick">foobar</${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick">foobar</${comp}>`,
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
      },

      /**
       * inline element
       *
       * @example
       * <FooBar><span>foobar</span></FooBar>
       */
      {
        name: `inline element <${comp}>`,
        cases: [
          [
            `<${comp}><span>foobar</span></${comp}>`,
            `<${comp}><span>foobar</span></${comp}>`,
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
            `<${comp} :prop-name="prop"><span>foobar</span></${comp}>`,
          ],
          [
            `<${comp} @click="onClick"><span>foobar</span></${comp}>`,
            `<${comp} @click="onClick"><span>foobar</span></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop" @click="onClick"><span>foobar</span></${comp}>`,
            `<${comp} :prop-name="prop" @click="onClick"><span>foobar</span></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"><span>foobar</span></${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"><span>foobar</span></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><span>foobar</span></${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><span>foobar</span></${comp}>`,
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
      },

      /**
       * block element
       *
       * @example
       * <FooBar><div>foobar</div></FooBar>
       */
      {
        name: `block element <${comp}>`,
        cases: [
          [
            `<${comp}><div>foobar</div></${comp}>`,
            `<${comp}><div>foobar</div></${comp}>`,
          ],
          [
            `<${comp}>\n<div>foobar</div>\n</${comp}>`,
            `<${comp}>\n<div>foobar</div>\n</${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"><div>foobar</div></${comp}>`,
            `<${comp} :prop-name="prop"><div>foobar</div></${comp}>`,
          ],
          [
            `<${comp} @click="onClick"><div>foobar</div></${comp}>`,
            `<${comp} @click="onClick"><div>foobar</div></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop" @click="onClick"><div>foobar</div></${comp}>`,
            `<${comp} :prop-name="prop" @click="onClick"><div>foobar</div></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"><div>foobar</div></${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"><div>foobar</div></${comp}>`,
          ],
          [
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><div>foobar</div></${comp}>`,
            `<${comp} :prop-name="prop"\nv-model="model"\n@click="onClick"><div>foobar</div></${comp}>`,
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
      },

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
      {
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
          [
            `- <${comp} /> [foo](https://github.com/)`,
            `\
<ul>
<li>
<${comp} /> [foo](https://github.com/)</li>
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
      },
    );
  });

  return testCases;
};
