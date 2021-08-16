import install from 'install-packages';
import { underline } from 'chalk';

import logInfo from '../utils/log/info';
import logError from '../utils/log/error';

export const command = 'create [service]';
export const desc = 'Create a new ssr service';

// command: 'configure <key> [value]',
export const aliases = ['bootstrap'];
export const builder = (yargs) => yargs.default('service', 'react');

/**
 * @param root0
 * @param root0.service
 */
export async function handler({ service }) {
  logInfo('Starting a new %s service', underline(service));

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
}
