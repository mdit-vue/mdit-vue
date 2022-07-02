import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    target: 'node14',
  },
  test: {
    // TODO: vitest coverage with c8 is incorrect
    coverage: {
      reporter: ['clover', 'json', 'lcov', 'text'],
    },
  },
});
