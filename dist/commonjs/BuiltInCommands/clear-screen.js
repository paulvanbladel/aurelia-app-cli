"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cls = undefined;

var _appConsoleOptions = require("../app-console-options");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cls = exports.Cls = function () {
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
}();