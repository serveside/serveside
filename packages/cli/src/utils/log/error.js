import { black, bgRed } from 'chalk';

const { log } = console;

const error = black;
const errorBg = bgRed;
const logError = (message, repl = null) => {
  if (repl) {
    log(errorBg(error(message)), repl);
  } else {
    log(errorBg(error(message)));
  }
};

export default logError;
