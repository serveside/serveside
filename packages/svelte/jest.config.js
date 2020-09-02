const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/svelte',
  displayName: 'Svelte',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
