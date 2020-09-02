// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/vue',
  displayName: 'Vue',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
