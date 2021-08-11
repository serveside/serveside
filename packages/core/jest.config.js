// Jest configuration for api
const base = require('../../jest.config.base');

module.exports = {
  ...base,
  name: '@serveside/core',
  displayName: 'Core',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
