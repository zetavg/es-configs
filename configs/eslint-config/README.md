# ESLint Config

Shared ESLint configurations.

## Install

```bash
yarn add @zetavg/eslint-config --dev
```

Then, add the following to your `eslint.config.js` (or `eslint.config.mjs`):

```js
import { defineConfig } from 'eslint/config';
import config from '@zetavg/eslint-config';

export default defineConfig([config]);
```
