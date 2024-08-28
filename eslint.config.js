import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { meteorlxy } from '@meteorlxy/eslint-config';

const packages = fs.readdirSync(
  path.resolve(fileURLToPath(import.meta.url), '../packages'),
);

export default meteorlxy({
  imports: {
    packageDir: ['./', ...packages.map((item) => `./packages/${item}`)],
  },
  typescript: {
    overrides: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      'import/no-rename-default': 'off',
      'prefer-template': 'off',
    },
  },
});
