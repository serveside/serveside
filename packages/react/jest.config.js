// Jest configuration for api
const base = require('../../jest.config.base');

module.exports = {
  ...base,
  name: '@serveside/react',
  displayName: 'React',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
