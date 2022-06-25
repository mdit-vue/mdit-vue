import { describe, expect, it } from 'vitest';
import { htmlEscape } from '../src';

const testCases = [['&<>\'"', '&amp;&lt;&gt;&#39;&quot;']];

describe('shared > html-escape', () => {
  describe('should escape special chars', () => {
    testCases.forEach(([source, expected]) => {
      it(source, () => {
        expect(htmlEscape(source)).toBe(expected);
      });
    });
  });
});
