'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _appConsoleConfiguration = require('./app-console-configuration');

function configure(aurelia, callback) {
  var config = new _appConsoleConfiguration.AppConsoleConfiguration(aurelia);

  if (typeof callback === 'function') {
    callback(config);
  } else {}
  config._apply();
}