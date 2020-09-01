// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/ssr-aas-core',
  displayName: 'Core',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
