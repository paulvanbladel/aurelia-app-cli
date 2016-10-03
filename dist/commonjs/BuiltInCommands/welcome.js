'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Welcome = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _aureliaFetchClient = require('aurelia-fetch-client');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
  function Welcome(httpClient) {
    _classCallCheck(this, Welcome);

    this.httpClient = httpClient;
  }

  Welcome.prototype.help = function help() {
    return 'prints the welcome text';
  };

  Welcome.prototype.resolveCommandLineArgs = function resolveCommandLineArgs(args) {};

  Welcome.prototype.updateAppCommand = function updateAppCommand(command) {};

  Welcome.prototype.execute = function execute() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        var returnValue = 'Hi welcome to the aurelia application CLI version ' + _this.getVersionNumber();
        resolve(returnValue);
      }, 1);
    });
  };

  Welcome.prototype.getVersionNumber = function getVersionNumber() {
    return '0.0.29';
  };

  Welcome.prototype.getVersionNumberFromPackageJson = function getVersionNumberFromPackageJson() {
    return this.httpClient.fetch('package.json').then(function (response) {
      return response.json();
    }).then(function (data) {
      return data.version;
    });
  };

  return Welcome;
}()) || _class);