# ESLint Config

Shared ESLint configuration.

## Install

```bash
pnpm add --save-dev @zetavg/eslint-config eslint prettier
```

```bash
yarn add --dev @zetavg/eslint-config eslint prettier
```

Then, add the following to your `eslint.config.mjs` (or `eslint.config.js`):

```js
import { defineConfig } from 'eslint/config';
import config from '@zetavg/eslint-config';

export default defineConfig([config]);
```
