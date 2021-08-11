// Jest configuration for api
const base = require('../../jest.config.base');

module.exports = {
  ...base,
  name: '@serveside/vue',
  displayName: 'Vue',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
