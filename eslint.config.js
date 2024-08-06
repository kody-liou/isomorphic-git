import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslintConfigPrettier,
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
  },
];

// TODO: Make website folder use the rule which is for React.js jsx