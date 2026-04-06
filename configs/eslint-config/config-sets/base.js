import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

import * as configs from '../configs/index.js';

/**
 * Base ESLint configuration that should apply to all JavaScript and TypeScript
 * files.
 */
export default defineConfig([
  {
    extends: [
      js.configs.recommended,
      configs.prettier,
      configs.style,
      configs.noUnusedVars,
      configs.imports,
      configs.importsSort,
      configs.consoleAndDebugger,
      configs.todoComments,
    ],
  },
]);
