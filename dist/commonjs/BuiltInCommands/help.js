'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = undefined;

var _appConsoleOptions = require('../app-console-options');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Help = exports.Help = function () {
  function Help() {
    _classCallCheck(this, Help);
  }

  Help.prototype.resolveCommandLineArgs = function resolveCommandLineArgs(args) {};

  Help.prototype.updateAppCommand = function updateAppCommand(command) {
    command.outputType = 'html';
  };

  Help.prototype.help = function help() {
    return 'gets help²';
  };

  Help.prototype.execute = function execute() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {

        var result = [];

        Reflect.ownKeys(_appConsoleOptions.appConsoleOptions.commands).forEach(function (a) {
          if (a !== '__esModule') {
            var helpText = a + ' : ' + _appConsoleOptions.appConsoleOptions.commands[a].prototype.help();
            result.push('<p>' + helpText + '</p>');
          }
        });

        var returnValue = result.join('\n');
        resolve(returnValue);
      }, 1);
    });
  };

  return Help;
}();