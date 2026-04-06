import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig([
  react.configs.flat.recommended,
  reactHooks.configs.flat['recommended-latest'] ||
    reactHooks.configs['recommended-latest'],
  reactRefreshPlugin.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
