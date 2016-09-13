"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var AppCommand;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("AppCommand", AppCommand = function AppCommand(commandInput) {
                _classCallCheck(this, AppCommand);

                this.input = commandInput.trim();
                this.outputType = "text";
                this.output = "";
                this.status = "";
                this.isBusy = false;
            });

            _export("AppCommand", AppCommand);
        }
    };
});