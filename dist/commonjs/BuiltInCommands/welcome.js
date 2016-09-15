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
        return "prints the welcome text";
    };

    Welcome.prototype.ResolveCommandLineArgs = function ResolveCommandLineArgs(args) {};

    Welcome.prototype.UpdateAppCommand = function UpdateAppCommand(command) {};

    Welcome.prototype.Execute = function Execute() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                debugger;

                var returnValue = "Hi welcome to the aurelia application CLI version " + _this.getVersionNumber();
                resolve(returnValue);
            }, 1);
        });
    };

    Welcome.prototype.getVersionNumber = function getVersionNumber() {

        return "0.0.24";
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