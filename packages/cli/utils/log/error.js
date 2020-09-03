const chalk = require('chalk');

const { log } = console;

const error = chalk.black;
const errorBg = chalk.bgRed;
const logError = (message, repl = null) => {
  if (repl) {
    log(errorBg(error(message)), repl);
  } else {
    log(errorBg(error(message)));
  }
};

module.exports = logError;
