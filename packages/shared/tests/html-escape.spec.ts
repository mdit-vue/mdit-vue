import { describe, expect, it } from 'vitest';
import { htmlEscape } from '../src/index.js';

const testCases = [['&<>\'"', '&amp;&lt;&gt;&#39;&quot;']];

describe('should escape special chars', () => {
  testCases.forEach(([source, expected]) => {
    it(source, () => {
      expect(htmlEscape(source)).toBe(expected);
    });
  });
});
