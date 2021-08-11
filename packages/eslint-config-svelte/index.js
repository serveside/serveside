module.exports = {
  extends: [
    '@shared/eslint-config'
  ],
  plugins: ['svelte3'],

  rules: {
    'import/no-extraneous-dependencies': 0,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],
};
