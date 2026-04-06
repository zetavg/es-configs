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
        // eslint-plugin-react uses the legacy `context.getFilename()` API for version auto-detection, which was removed in ESLint v10.
        // To work around this, we can only specify the React version explicitly. We should update this when eslint-plugin-react releases a new version that supports the new API.
        // See: https://github.com/vercel/next.js/issues/89764#issuecomment-3928272828
        // version: 'detect',
        version: '19',
      },
    },
  },
]);
