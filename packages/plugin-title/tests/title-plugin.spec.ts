import type { MarkdownItEnv } from '@mdit-vue/types';
import MarkdownIt from 'markdown-it';
import { full as emojiPlugin } from 'markdown-it-emoji';
import { describe, expect, it } from 'vitest';
import { titlePlugin } from '../src/index.js';

describe('@mdit-vue/plugin-title > title-plugin', () => {
  const md = MarkdownIt().use(emojiPlugin).use(titlePlugin);

  describe('should extract title from h1 heading', () => {
    const TEST_CASES = [
      ['# title from h1 :tada:', 'title from h1 🎉'],
      ['# title from h1 `foobar`', 'title from h1 foobar'],
    ];

    TEST_CASES.forEach(([source, expected]) => {
      it(source, () => {
        const env: MarkdownItEnv = {};
        md.render(source, env);
        expect(env.title).toEqual(expected);
      });
    });
  });

  it('should extract empty title', () => {
    const env: MarkdownItEnv = {};
    md.render('', env);
    expect(env.title).toEqual('');
  });
});
