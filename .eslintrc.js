module.exports = {
  env: {
    browser: false,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'vue'],
  rules: {
    'react/jsx-props-no-spreading': 0,
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
