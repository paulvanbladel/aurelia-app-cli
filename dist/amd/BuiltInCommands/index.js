define(['exports', './clear-screen', './help', './welcome'], function (exports, _clearScreen, _help, _welcome) {
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
  Object.defineProperty(exports, 'Welcome', {
    enumerable: true,
    get: function () {
      return _welcome.Welcome;
    }
  });
});