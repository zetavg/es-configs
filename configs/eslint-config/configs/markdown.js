import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    plugins: {
      markdown,
    },
  },
  markdown.configs.recommended,
  {
    rules: {
      'markdown/no-missing-label-refs': [
        'warn',
        {
          // Alerts (a.k.a. callouts or admonitions) may be interpreted as labels by this rule, but they are not actually labels and shouldn't be checked for references.
          // We include the common alert labels here to prevent false positives.
          // https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
          allowLabels: ['!NOTE', '!TIP', '!IMPORTANT', '!WARNING', '!CAUTION'],
        },
      ],
    },
  },
]);
