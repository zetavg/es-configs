import { defineConfig } from 'eslint/config';
import globals from 'globals';

/**
 * CommonJS-specific ESLint configuration. Should only apply to CommonJS files.
 */
export default defineConfig([
  {
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals['commonjs'],
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
