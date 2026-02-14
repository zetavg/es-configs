/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require('@yarnpkg/types');

const setVersions = require('./.yarn/constraints/setVersions.cjs').default;

module.exports = defineConfig({
  async constraints(ctx) {
    // Only check/set versions if the PACKAGES_VERSION environment variable is set.
    if (process.env.PACKAGES_VERSION) {
      setVersions(ctx, process.env.PACKAGES_VERSION);
      return;
    }
  },
});
