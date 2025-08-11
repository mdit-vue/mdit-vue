import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  entry: './src/index.ts',
  exports: true,
  fixedExtension: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
});
