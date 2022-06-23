import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  externals: ['markdown-it'],
  rollup: {
    emitCJS: true,
    inlineDependencies: false,
  },
});
