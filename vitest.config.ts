import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@mdit-vue\/([^/]*)$/,
        replacement: path.resolve(root, './packages/$1/src/index.ts'),
      },
    ],
  },
  esbuild: {
    target: 'node14',
  },
  test: {
    coverage: {
      include: ['packages/*/src/**/*.ts'],
      provider: 'istanbul',
      reporter: ['clover', 'json', 'lcov', 'text'],
    },
  },
});
