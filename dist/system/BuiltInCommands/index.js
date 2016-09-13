'use strict';

System.register(['./clear-screen', './help'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_clearScreen) {
      var _exportObj = {};
      _exportObj.Cls = _clearScreen.Cls;

      _export(_exportObj);
    }, function (_help) {
      var _exportObj2 = {};
      _exportObj2.Help = _help.Help;

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});