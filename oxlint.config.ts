import { meteorlxy } from '@meteorlxy/oxlint-config';

export default meteorlxy({
  options: {
    typeCheck: true,
    typeAware: true,
  },
  rules: {
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'typescript/no-non-null-assertion': 'off',
    'vitest/valid-title': [
      'warn',
      {
        ignoreTypeOfDescribeName: true,
        ignoreTypeOfTestName: true,
      },
    ],
  },
});
