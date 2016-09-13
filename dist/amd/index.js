define(['exports', './app-console-configuration'], function (exports, _appConsoleConfiguration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia, callback) {
    var config = new _appConsoleConfiguration.AppConsoleConfiguration(aurelia);

    if (typeof callback === 'function') {
      callback(config);
    } else {}

    config._apply();
  }
});