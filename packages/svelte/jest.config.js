const base = require('../../jest.config.base');

module.exports = {
  ...base,
  name: '@serveside/svelte',
  displayName: 'Svelte',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
