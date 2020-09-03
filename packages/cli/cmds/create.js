const install = require('install-packages');
const chalk = require('chalk');

const logInfo = require('../log/info');
const logError = require('../log/error');

exports.command = 'create [service]';
exports.desc = 'Create a new ssr service';
exports.builder = {
  service: {
    default: 'react',
  },
};

exports.handler = async ({ service }) => {
  logInfo('Starting a new %s service', chalk.underline(service));

  try {
    logInfo('Installing npm core services...');
    await install({
      packages: ['@serveside/core', `@serveside/${service}`],
      installPeers: true,
    });
    logInfo('Finished installing npm core services...');
  } catch (err) {
    logError(err);
  }
};
