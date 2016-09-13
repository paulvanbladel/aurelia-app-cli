define(['exports', './clear-screen', './help'], function (exports, _clearScreen, _help) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Cls', {
    enumerable: true,
    get: function () {
      return _clearScreen.Cls;
    }
  });
  Object.defineProperty(exports, 'Help', {
    enumerable: true,
    get: function () {
      return _help.Help;
    }
  });
});