'use strict';

System.register(['./app-console-options', './BuiltInCommands/index'], function (_export, _context) {
  "use strict";

  var appConsoleOptions, builtInCommands, AppConsoleConfiguration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_appConsoleOptions) {
      appConsoleOptions = _appConsoleOptions.appConsoleOptions;
    }, function (_BuiltInCommandsIndex) {
      builtInCommands = _BuiltInCommandsIndex;
    }],
    execute: function () {
      _export('AppConsoleConfiguration', AppConsoleConfiguration = function () {
        function AppConsoleConfiguration(aurelia) {
          _classCallCheck(this, AppConsoleConfiguration);

          this.aurelia = aurelia;
          this.settings = appConsoleOptions;
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
      }());

      _export('AppConsoleConfiguration', AppConsoleConfiguration);
    }
  };
});