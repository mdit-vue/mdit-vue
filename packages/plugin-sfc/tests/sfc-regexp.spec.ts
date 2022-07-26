import { describe, expect, it } from 'vitest';
import { SCRIPT_SETUP_TAG_OPEN_REGEXP } from '../src/index.js';

const testCases: [string, boolean][] = [
  ['<script>', false],
  ['<script lang="ts">', false],
  ['<script lang="ts"   >', false],
  ['<script setupa>', false],
  ['<script setuplang="ts">', false],
  ['<script lang="ts"setup>', true],
  ['<script setup>', true],
  ['<script setup  >', true],
  ['<script    setup  >', true],
  ['<script lang="ts" setup>', true],
  ['<script   lang="ts"   setup>', true],
  ['<script lang="ts" setup   >', true],
  ['<script \nlang="ts"\n setup  \n  >', true],
];

describe('@mdit-vue/plugin-sfc > sfc-regexp', () => {
  describe('should test setup script open tag correctly', () => {
    testCases.forEach(([source, expected]) =>
      it(source, () => {
        expect(SCRIPT_SETUP_TAG_OPEN_REGEXP.test(source)).toBe(expected);
      }),
    );
  });
});
