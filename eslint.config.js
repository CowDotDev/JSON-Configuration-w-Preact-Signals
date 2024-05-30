import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ),
  eslintConfigPrettier,
  {
    name: 'eslint-fulfilld-manager-overrides',
    files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
    ignores: [
      'src/**/*.test.js',
      'src/**/*.test.jsx',
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
      'src/**/*.generated.js',
      'src/**/*.generated.jsx',
      'src/**/*.generated.ts',
      'src/**/*.generated.tsx',
    ],
    ...eslintConfigReactRecommended,
    languageOptions: {
      ...eslintConfigReactRecommended.languageOptions,
      parser: eslintParserTypescript,
      globals: {
        ...globals.browser
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Worth looking into removing the `off` rules one-by-one at some point, and determining if they should stay off or be turned on and fixed.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/unbound-method': 0,
      'no-null/no-null': 0,
      'react-hooks/exhaustive-deps': 0,
      // 'import/no-unused-modules': [1, { unusedExports: true, missingExports: true }], <-- We want to use this... but there is an error from this rule processing. We'll need to spend time trying to reproduce in a fresh repo to report an issue.
      // 'import/order': [
      //   'error',
      //   {
      //     alphabetize: { order: 'asc', caseInsensitive: true },
      //     'newlines-between': 'always',
      //     warnOnUnassignedImports: true,
      //   },
      // ], Currently doesn't support this flat config https://github.com/import-js/eslint-plugin-import/pull/2873
    },
  },
];
