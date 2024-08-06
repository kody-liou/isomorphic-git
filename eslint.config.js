import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";

export default [
  eslintConfigPrettier,
  eslintPluginImport,
  {
    ignores: [
      '/dist/', '*.mjs',
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
  },
];
