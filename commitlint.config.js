module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': [
        2,
        'always',
        [
          // workspace packages
          '@serveside/core',
          '@serveside/cli',
          '@serveside/react',
          '@serveside/vue',
          '@serveside/svelte',
          'eslint',
          '*',
        ],
      ],
    },
  }
  