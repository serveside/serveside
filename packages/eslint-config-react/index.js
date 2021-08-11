module.exports = {
  extends: [
    'plugin:react/recommended',
    '@shared/eslint-config'
  ],
  
  settings: {
    react: {
      version: 'detect',
    },
  },

  plugins: ['react'],

  rules: {
    'react/jsx-props-no-spreading': 0,
  },
};
