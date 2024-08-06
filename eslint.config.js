import prettierStandard from 'eslint-config-prettier-standard';

export default [
  prettierStandard,
  {
    ignorePatterns: ['/dist/', '*.mjs'],
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          groups: ['builtin', 'external', 'parent', 'index', 'sibling'],
          'newlines-between': 'always',
        },
      ],
    },
    ignores: [
      '/__tests__/__fixtures__',
      '/docs',
      '/node_modules',
      '/website',
      // Build artifacts
      '/__tests__/__examples__',
      '/coverage',
      '/http',
      '/index.js',
      '/internal-apis.js',
      '/index.umd.min.js',
      '/internal-apis.umd.min.js',
      '/junit',
    ],
  },
];
