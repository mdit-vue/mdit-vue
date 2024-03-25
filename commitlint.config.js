import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const packages = fs.readdirSync(
  path.resolve(fileURLToPath(import.meta.url), '../packages'),
);

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', packages],
    'footer-max-line-length': [0],
  },
};
