import { describe, expect, it } from 'vitest';
import { htmlUnescape } from '../src/index.js';

const TEST_CASES = [
  ['&amp;&#38;&lt;&#60;&gt;&#62;&apos;&#39;&quot;&#34;', '&&<<>>\'\'""'],
  ['&amp;lt;', '&lt;'],
  [
    '&amp;lt;script&amp;gt;&amp;lt;/script&amp;gt;',
    '&lt;script&gt;&lt;/script&gt;',
  ],
];

describe('shared > html-unescape', () => {
  describe('should unescape special chars', () => {
    TEST_CASES.forEach(([source, expected]) => {
      it(source, () => {
        expect(htmlUnescape(source)).toBe(expected);
      });
    });
  });
});
