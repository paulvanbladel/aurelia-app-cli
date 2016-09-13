"use strict";

System.register(["../app-console-options"], function (_export, _context) {
    "use strict";

    var appConsoleOptions, Cls;

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
            _export("Cls", Cls = function () {
                function Cls() {
                    _classCallCheck(this, Cls);
                }

                Cls.prototype.ResolveCommandLineArgs = function ResolveCommandLineArgs(args) {};

                Cls.prototype.UpdateAppCommand = function UpdateAppCommand(command) {};

                Cls.prototype.help = function help() {
                    return "clears the screen";
                };

                Cls.prototype.Execute = function Execute() {};

                return Cls;
            }());

            _export("Cls", Cls);
        }
    };
});