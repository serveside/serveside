const install = require('install-packages');

/* eslint-disable no-unused-expressions */
exports.command = 'create [service]';
exports.desc = 'Create a new ssr service';
exports.builder = {
  service: {
    default: 'react',
  },
};
exports.handler = async ({ service }) => {
  console.log(`Starting a new ${service} service`);

  try {
    await install({
      packages: ['@serveside/core', `@serveside/${service}`],
      installPeers: true,
    });
  } catch (error) {
    console.log(error);
  }
};
