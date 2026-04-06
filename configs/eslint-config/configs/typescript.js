import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

/**
 * Default ESLint configuration for TypeScript.
 */
export default defineConfig([
  tseslint.configs.recommended,
  {
    rules: {
      // Turned off in favor of the `no-unused/no-unused-vars` rule in `no-unused.js`.
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);
