const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/ssr-aas-svelte',
  displayName: 'Svelte',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
