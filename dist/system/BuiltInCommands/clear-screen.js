'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Cls;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Cls', Cls = function () {
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
      }());

      _export('Cls', Cls);
    }
  };
});