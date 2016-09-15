'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppConsoleCustomElement = undefined;

var _dec, _dec2, _class;

var _aureliaFramework = require('aurelia-framework');

var _appCommand = require('./app-command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ENTER_KEY = 13;
var KEY_UP = 38;
var KEY_DOWN = 40;
var AppConsoleCustomElement = exports.AppConsoleCustomElement = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.All.of('Command')), _dec2 = (0, _aureliaFramework.customElement)('app-console'), _dec(_class = _dec2(_class = function () {
    function AppConsoleCustomElement(commandList) {
        _classCallCheck(this, AppConsoleCustomElement);

        this.newCommandInput = "";
        this.history = [];
        this.cmdOffset = 0;
        this.commandList = commandList;
        this.runStartupCommand();
    }

    AppConsoleCustomElement.prototype.runStartupCommand = function runStartupCommand() {
        this.newCommandInput = "welcome";
        this.addNewCommand(this.newCommand);
    };

    AppConsoleCustomElement.prototype.onKeyUp = function onKeyUp(ev) {
        switch (ev.keyCode) {
            case ENTER_KEY:
                this.newCommandInput = this.newCommandInput.trim();
                if (this.newCommandInput != "") {
                    this.addNewCommand(this.newCommandInput);
                    ev.preventDefault();
                }
                break;

            case KEY_UP:
                if (this.history.length + this.cmdOffset > 0) {
                    this.cmdOffset--;
                    this.newCommandInput = this.history[this.history.length + this.cmdOffset].input;
                    ev.preventDefault();
                }
                break;

            case KEY_DOWN:
                if (this.cmdOffset < -1) {
                    this.cmdOffset++;
                    this.newCommandInput = this.history[this.history.length + this.cmdOffset].input;
                    ev.preventDefault();
                }
                break;
        }
    };

    AppConsoleCustomElement.prototype.isHtml = function isHtml(item) {
        return item.outputType === "html";
    };

    AppConsoleCustomElement.prototype.isText = function isText(item) {
        return !this.isHtml(item);
    };

    AppConsoleCustomElement.prototype.addNewCommand = function addNewCommand() {
        var newCommand = new _appCommand.AppCommand(this.newCommandInput);
        this.newCommandInput = "";

        this.history.push(newCommand);

        newCommand.isBusy = true;

        var args = this.getArgs(newCommand.input);
        var cmd = args[0].toUpperCase();

        var method = this.commandList.find(function (c) {
            return c.constructor.name.toUpperCase() === cmd;
        });

        if (method === undefined) {
            newCommand.output = "unknown command";
            newCommand.status = "error";
            newCommand.isBusy = false;
            return;
        }

        if (cmd === "CLS") {
            this.history = [];
            return;
        }

        method.UpdateAppCommand(newCommand);

        method.ResolveCommandLineArgs(args);

        return method.Execute().then(function (r) {
            newCommand.output = r;
            newCommand.status = "ok";
        }).catch(function (e) {
            newCommand.outputType = "text";
            newCommand.output = e;
            newCommand.status = "error";
        }).finally(function () {
            newCommand.isBusy = false;
        });
    };

    AppConsoleCustomElement.prototype.getArgs = function getArgs(cmdLine) {
        var tokenEx = /[^\s"]+|"[^"]*"/g;
        var quoteEx = /"/g;
        var args = cmdLine.match(tokenEx);

        for (var i = 0; i < args.length; i++) {
            args[i] = args[i].replace(quoteEx, '');
        }
        return args;
    };

    return AppConsoleCustomElement;
}()) || _class) || _class);