# Prettier Config

Shared Prettier configuration.

## Install

```bash
pnpm add --save-dev @zetavg/prettier-config prettier
```

```bash
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
