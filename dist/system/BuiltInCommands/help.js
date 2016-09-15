"use strict";

System.register(["../app-console-options"], function (_export, _context) {
    "use strict";

    var appConsoleOptions, Help;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_appConsoleOptions) {
            appConsoleOptions = _appConsoleOptions.appConsoleOptions;
        }],
        execute: function () {
            _export("Help", Help = function () {
                function Help() {
                    _classCallCheck(this, Help);
                }

                Help.prototype.ResolveCommandLineArgs = function ResolveCommandLineArgs(args) {};

                Help.prototype.UpdateAppCommand = function UpdateAppCommand(command) {
                    command.outputType = "html";
                };

                Help.prototype.help = function help() {
                    return "gets help²";
                };

                Help.prototype.Execute = function Execute() {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {

                            var result = [];

                            Reflect.ownKeys(appConsoleOptions.commands).forEach(function (a) {
                                if (a != "__esModule") {
                                    var helpText = a + " : " + appConsoleOptions.commands[a].prototype.help();
                                    result.push("<p>" + helpText + "</p>");
                                }
                            });

                            var returnValue = result.join("\n");
                            resolve(returnValue);
                        }, 1);
                    });
                };

                return Help;
            }());

            _export("Help", Help);
        }
    };
});