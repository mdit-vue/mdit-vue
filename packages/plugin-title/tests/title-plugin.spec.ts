import type { Env } from 'markdown-it';
import MarkdownIt from 'markdown-it';
import { full as emojiPlugin } from 'markdown-it-emoji';
import { describe, expect, test } from 'vitest';

import { titlePlugin } from '../src/index.js';

const md = new MarkdownIt().use(emojiPlugin).use(titlePlugin);

describe('should extract title from h1 heading', () => {
  const testCases = [
    ['# title from h1 :tada:', 'title from h1 🎉'],
    ['# title from h1 `foobar`', 'title from h1 foobar'],
  ];

  testCases.forEach(([source, expected]) => {
    test(source, () => {
      const env: Env = {};
      md.render(source, env);
      expect(env.title).toEqual(expected);
    });
  });
});

test('should extract empty title', () => {
  const env: Env = {};
  md.render('', env);
  expect(env.title).toEqual('');
});

test('should render without env', () => {
  const tokens = md.parse('# title', {});

  expect(md.renderer.render(tokens, md.options)).toBe('<h1>title</h1>\n');
});
