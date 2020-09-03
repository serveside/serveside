const chalk = require('chalk');

const { log } = console;

const info = chalk.green;
const infoBg = chalk.bgBlue;
const logInfo = (message, repl = null) => {
  if (repl) {
    log(infoBg(info(message)), repl);
  } else {
    log(infoBg(info(message)));
  }
};

module.exports = logInfo;
