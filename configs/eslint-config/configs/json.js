import json from '@eslint/json';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    plugins: {
      json,
    },
  },
  {
    files: ['**/*.json', '**/*.jsonc'],
    language: 'json/jsonc',
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
]);
