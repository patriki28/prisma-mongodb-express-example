import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-plugin-prettier/recommended';

export default tseslint.config({
  files: ['**/*.ts'],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierConfig
  ],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
});
