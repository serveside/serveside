// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/core',
  displayName: 'Core',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
