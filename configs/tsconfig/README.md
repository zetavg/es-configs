# TypeScript Config

This package provides some shared TypeScript configurations for all workspaces in the monorepo.

## Install

```bash
yarn add @zetavg/tsconfig --dev && yarn constraints --fix && yarn
```

Then, add the following to your `tsconfig.json`:

```json5
{
  "extends": "@zetavg/tsconfig",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"] // Optional path mappings
    }
  },
  "include": [
    "**/*.ts"
  ]
}
```
