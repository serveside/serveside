// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/ssr-aas',
  displayName: 'Bin',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
