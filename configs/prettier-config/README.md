# Prettier Config

Shared Prettier configuration.

## Install

```bash
# npm
npm install --save-dev @zetavg/prettier-config prettier
# pnpm
pnpm add --save-dev @zetavg/prettier-config prettier
# yarn
yarn add --dev @zetavg/prettier-config prettier
```

Then, add the following to your `prettier.config.mjs`:

```js
import defaultConfig from '@zetavg/prettier-config';

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...defaultConfig,
};

export default config;
```
