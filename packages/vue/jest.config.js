// Jest configuration for api
const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@maniator/ssr-aas-vue',
  displayName: 'Vue',
  rootDir: '.',
  roots: ['<rootDir>/src'],
};
