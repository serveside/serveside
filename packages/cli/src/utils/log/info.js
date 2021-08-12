import { green, bgBlue } from 'chalk';

const { log } = console;

const info = green;
const infoBg = bgBlue;
const logInfo = (message, repl = null) => {
  if (repl) {
    log(infoBg(info(message)), repl);
  } else {
    log(infoBg(info(message)));
  }
};

export default logInfo;
