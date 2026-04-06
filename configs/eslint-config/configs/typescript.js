import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

/**
 * Default ESLint configuration for TypeScript.
 */
export default defineConfig([tseslint.configs.recommended]);
