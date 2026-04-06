import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import * as jsoncParser from 'jsonc-eslint-parser';

export default defineConfig([
  {
    plugins: {
      json,
    },
  },
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    language: 'json/json',
    languageOptions: { parser: jsoncParser },
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
]);
