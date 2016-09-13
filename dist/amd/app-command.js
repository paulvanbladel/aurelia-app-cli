define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AppCommand = exports.AppCommand = function AppCommand(commandInput) {
        _classCallCheck(this, AppCommand);

        this.input = commandInput.trim();
        this.outputType = "text";
        this.output = "";
        this.status = "";
        this.isBusy = false;
    };
});