module.exports = {
  env: {
    browser: false,
    node: true,
  },
  ignorePatterns: ["node_modules/**/*", "dist/**/*"],
  extends: [
    'airbnb',
    'plugin:jsdoc/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      configFile: "../../babel.config.js",
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
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
