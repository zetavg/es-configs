import { defineConfig } from 'eslint/config';

/**
 * Enforces consistent code style and formatting rules to improve readability.
 */
export default defineConfig([
  {
    rules: {
      curly: ['warn', 'multi-line', 'consistent'],
    },
  },
]);
