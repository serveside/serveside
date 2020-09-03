#!/usr/bin/env node

const config = require('./utils/config');

// eslint-disable-next-line no-unused-expressions
require('yargs')
  .config(config)
  .commandDir('cmds')
  .demandCommand()
  .help()
  .wrap(72).argv;
