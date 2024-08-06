import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
  eslintPluginReact,
  eslintPluginReactHooks,
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
  // TODO: Make website folder use the rule which is for React.js jsx
  {
    files: ["website/**/*.jsx", "website/**/*.js"],
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    plugins: {
      react: eslintPluginReact,
      reactHooks: eslintPluginReactHooks,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
