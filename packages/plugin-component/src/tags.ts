/**
 * List of block tags
 *
 * @see https://spec.commonmark.org/0.30/#html-blocks
 * @see https://github.com/markdown-it/markdown-it/blob/master/lib/common/html_blocks.mjs
 */
export const TAGS_BLOCK = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'search',
  'section',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul',
];

/**
 * According to markdown spec, all non-block html tags are treated as "inline"
 * tags (wrapped with <p></p>), including those "unknown" tags
 *
 * Therefore, markdown-it processes "inline" tags and "unknown" tags in the same
 * way, and does not care if a tag is "inline" or "unknown"
 *
 * As we want to take those "unknown" tags as custom components, we should
 * treat them as "block" tags
 *
 * So we have to distinguish between "inline" and "unknown" tags ourselves
 *
 * The inline tags list comes from MDN
 *
 * @see https://spec.commonmark.org/0.30/#raw-html
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
 */
export const TAGS_INLINE = [
  'a',
  'abbr',
  'acronym',
  'audio',
  'b',
  'bdi',
  'bdo',
  'big',
  'br',
  'button',
  'canvas',
  'cite',
  'code',
  'data',
  'datalist',
  'del',
  'dfn',
  'em',
  'embed',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'meter',
  'noscript',
  'object',
  'output',
  'picture',
  'progress',
  'q',
  'ruby',
  's',
  'samp',
  'script',
  'select',
  'slot',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'template',
  'textarea',
  'time',
  'u',
  'tt',
  'var',
  'video',
  'wbr',
];

/**
 * Tags of Vue built-in components
 *
 * @see https://vuejs.org/api/built-in-components.html
 * @see https://vuejs.org/api/built-in-special-elements.html
 */
export const TAGS_VUE_RESERVED = [
  'template',
  'component',
  'transition',
  'transition-group',
  'keep-alive',
  'slot',
  'teleport',
];
