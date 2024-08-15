import { describe, expect, it } from 'vitest';
import { htmlEscape } from '../src/index.js';

const TEST_CASES = [['&<>\'"', '&amp;&lt;&gt;&#39;&quot;']];

describe('shared > html-escape', () => {
  describe('should escape special chars', () => {
    TEST_CASES.forEach(([source, expected]) => {
      it(source, () => {
        expect(htmlEscape(source)).toBe(expected);
      });
    });
  });
});
