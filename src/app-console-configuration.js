
import {appConsoleOptions} from './app-console-options';
import * as builtInCommands from './BuiltInCommands/index';

/**
 * A configuration builder for the app-console plugin.
 */
export class AppConsoleConfiguration {
  /**
   * The configuration settings.
   */
  settings: any;
  constructor(aurelia) {
    this.aurelia = aurelia;
    this.settings = appConsoleOptions;
    this.settings.commands = builtInCommands;
  }


  attachCustomCommands(customCommands?: Object): AppConsoleConfiguration {
    this.settings.commands = Object.assign(this.settings.commands, customCommands || {});
    return this;
  }

  _apply() {
    Reflect.ownKeys(this.settings.commands).forEach(a => {
      if (a !== '__esModule') {
        this.aurelia.transient('Command', this.settings.commands[a]);
      }
    });

    this.aurelia.globalResources('./app-console');
  }
}
