import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // TODO: vitest coverage with c8 is incorrect
    coverage: {
      reporter: ['clover', 'json', 'lcov', 'text'],
    },
  },
});
