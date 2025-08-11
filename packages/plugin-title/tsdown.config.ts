import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  entry: './src/index.ts',
  exports: true,
  format: 'esm',
  outDir: 'dist',
  platform: 'neutral',
  treeshake: false, // it might be a bug of tsdown that module augmentation in types.ts will be tree-shaken
});
