// Jest configuration for api
const base = require('../../jest.config.base');

module.exports = {
  ...base,
  name: '@serveside/serveside',
  displayName: 'Bin',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
