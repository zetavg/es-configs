import { defineConfig } from 'eslint/config';

/**
 * Warns on `console.log` and `debugger` statements to prevent them from
 * slipping into production code.
 *
 * Use `console.info`, `console.warn`, or `console.error` for intentional logging;
 * reserve `console.log` for temporary debugging only.
 */
export default defineConfig([
  {
    rules: {
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'no-debugger': 'warn',
    },
  },
]);
