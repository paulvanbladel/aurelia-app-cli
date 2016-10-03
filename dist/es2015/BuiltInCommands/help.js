
import { appConsoleOptions } from '../app-console-options';

export let Help = class Help {
  resolveCommandLineArgs(args) {}

  updateAppCommand(command) {
    command.outputType = 'html';
  }
  help() {
    return 'gets help²';
  }
  execute() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let result = [];

        Reflect.ownKeys(appConsoleOptions.commands).forEach(a => {
          if (a !== '__esModule') {
            let helpText = a + ' : ' + appConsoleOptions.commands[a].prototype.help();
            result.push('<p>' + helpText + '</p>');
          }
        });

        let returnValue = result.join('\n');
        resolve(returnValue);
      }, 1);
    });
  }
};