'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppConsoleConfiguration = undefined;

var _appConsoleOptions = require('./app-console-options');

var _index = require('./BuiltInCommands/index');

var builtInCommands = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppConsoleConfiguration = exports.AppConsoleConfiguration = function () {
  function AppConsoleConfiguration(aurelia) {
    _classCallCheck(this, AppConsoleConfiguration);

    this.aurelia = aurelia;
    this.settings = _appConsoleOptions.appConsoleOptions;
    this.settings.commands = builtInCommands;
  }

  AppConsoleConfiguration.prototype.attachCustomCommands = function attachCustomCommands(customCommands) {
    this.settings.commands = Object.assign(this.settings.commands, customCommands || {});
    return this;
  };

  AppConsoleConfiguration.prototype._apply = function _apply() {
    var _this = this;

    Reflect.ownKeys(this.settings.commands).forEach(function (a) {
      if (a !== '__esModule') {
        _this.aurelia.transient('Command', _this.settings.commands[a]);
      }
    });

    this.aurelia.globalResources('./app-console');
  };

  return AppConsoleConfiguration;
}();