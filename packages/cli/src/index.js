#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import config from './utils/config';

const args = hideBin(process.argv);

yargs(args) // eslint-disable-line no-unused-expressions
  .config(config)
  .commandDir('cmds')
  .help()
  .demandCommand(1)
  .argv;
