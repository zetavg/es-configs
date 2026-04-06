import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

/**
 * Default ESLint configuration for TypeScript.
 * Should already be scoped to TypeScript files.
 */
export default defineConfig([tseslint.configs.recommended]);
