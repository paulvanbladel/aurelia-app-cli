define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Cls = exports.Cls = function () {
    function Cls() {
      _classCallCheck(this, Cls);
    }

    Cls.prototype.resolveCommandLineArgs = function resolveCommandLineArgs(args) {};

    Cls.prototype.updateAppCommand = function updateAppCommand(command) {};

    Cls.prototype.help = function help() {
      return 'clears the screen';
    };

    Cls.prototype.execute = function execute() {};

    return Cls;
  }();
});