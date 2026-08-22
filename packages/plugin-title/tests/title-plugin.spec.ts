import type { Env } from 'markdown-it';
import MarkdownIt from 'markdown-it';
import { full as emojiPlugin } from 'markdown-it-emoji';
import { describe, expect, it } from 'vitest';

import { titlePlugin } from '../src/index.js';

const md = MarkdownIt()
  // @ts-expect-error -- @types/markdown-it-emoji still targets markdown-it v14
  .use(emojiPlugin)
  .use(titlePlugin);

describe('should extract title from h1 heading', () => {
  const testCases = [
    ['# title from h1 :tada:', 'title from h1 🎉'],
    ['# title from h1 `foobar`', 'title from h1 foobar'],
  ];

  testCases.forEach(([source, expected]) => {
    it(source, () => {
      const env: Env = {};
      md.render(source, env);
      expect(env.title).toEqual(expected);
    });
  });
});

it('should extract empty title', () => {
  const env: Env = {};
  md.render('', env);
  expect(env.title).toEqual('');
});

it('should render when env is omitted', () => {
  const tokens = md.parse('# title', {});
  expect(md.renderer.render(tokens, md.options)).toBe('<h1>title</h1>\n');
});
