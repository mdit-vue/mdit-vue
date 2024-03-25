import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { meteorlxy } from '@meteorlxy/eslint-config';

const packages = fs.readdirSync(
  path.resolve(fileURLToPath(import.meta.url), '../packages'),
);

export default meteorlxy(
  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
      overrides: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/prefer-destructuring': 'off',
        'prefer-template': 'off',
      },
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          packageDir: ['./', ...packages.map((item) => `./packages/${item}`)],
        },
      ],
    },
  },
);
