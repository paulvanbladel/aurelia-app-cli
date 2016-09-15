
import {appConsoleOptions} from '../app-console-options';

export class Help {
    ResolveCommandLineArgs(args) {

    }

    UpdateAppCommand(command) {
        command.outputType = "html";
    }
    help() {
        return "gets help²";
    }
    Execute() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //transform args

                let result = [];

                Reflect.ownKeys(appConsoleOptions.commands).forEach(a => {
                    if (a != "__esModule") {
                        let helpText = a + " : " + appConsoleOptions.commands[a].prototype.help();
                        result.push("<p>" + helpText + "</p>");

                    }
                });

                var returnValue = result.join("\n");
                resolve(returnValue);

            }, 2000);
        });
    }
}