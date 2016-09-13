

import { AppConsoleConfiguration } from './app-console-configuration';

export function configure(aurelia, callback) {
  let config = new AppConsoleConfiguration(aurelia);

  if (typeof callback === 'function') {
    callback(config);
  } else {}

  config._apply();
}