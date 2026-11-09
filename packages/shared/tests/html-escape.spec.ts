import { describe, expect, test } from 'vitest';

import { htmlEscape } from '../src/index.js';

const testCases = [['&<>\'"', '&amp;&lt;&gt;&#39;&quot;']];

describe('should escape special chars', () => {
  testCases.forEach(([source, expected]) => {
    test(source, () => {
      expect(htmlEscape(source)).toBe(expected);
    });
  });
});
