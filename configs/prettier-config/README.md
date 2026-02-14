# Prettier Config

Shared Prettier configurations.

## Install

```bash
yarn add @zetavg/prettier-config --dev
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
