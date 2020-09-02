const { execSync } = require('child_process');

/* eslint-disable no-unused-expressions */
exports.command = 'create [service]';
exports.desc = 'Create a new ssr service';
exports.builder = {
  service: {
    default: 'react',
  },
};
exports.handler = ({ service }) => {
  console.log(`Starting a new ${service} service`);

  const command = `npm install @serveside/core @serveside/${service}`;

  console.log('Running command', `"${command}"`);

  try {
    const output = execSync(command).toString().trim();
    console.log('Installed dependencies', output);
  } catch (error) {
    console.log(error);
  }
};
