module.exports = {
  root: true,
  extends: ['@meteorlxy/prettier'],
  overrides: [
    {
      files: ['*.ts'],
      extends: '@meteorlxy/prettier-typescript',
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'always',
            cjs: 'always',
            mjs: 'always',
          },
        ],
        'no-plusplus': 'off',
        'prefer-destructuring': 'off',
        'prefer-template': 'off',
      },
    },
  ],
};
