// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@serveside/react',
  displayName: 'React',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
