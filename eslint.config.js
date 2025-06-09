import { meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy({
  markdown: {
    overrides: {
      'import/order': 'off',
    },
  },
  typescript: {
    overrides: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      'prefer-template': 'off',
    },
  },
});
