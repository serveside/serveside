module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'vue', 'svelte3'],

  rules: {
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
