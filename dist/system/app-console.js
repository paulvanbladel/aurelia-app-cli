'use strict';

System.register(['aurelia-framework', './app-command'], function (_export, _context) {
    "use strict";

    var customElement, bindable, bindingMode, All, inject, AppCommand, _dec, _dec2, _class, ENTER_KEY, KEY_UP, KEY_DOWN, AppConsoleCustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
            All = _aureliaFramework.All;
            inject = _aureliaFramework.inject;
        }, function (_appCommand) {
            AppCommand = _appCommand.AppCommand;
        }],
        execute: function () {
            ENTER_KEY = 13;
            KEY_UP = 38;
            KEY_DOWN = 40;

            _export('AppConsoleCustomElement', AppConsoleCustomElement = (_dec = inject(All.of('Command')), _dec2 = customElement('app-console'), _dec(_class = _dec2(_class = function () {
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
                    var newCommand = new AppCommand(this.newCommandInput);
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
            }()) || _class) || _class));

            _export('AppConsoleCustomElement', AppConsoleCustomElement);
        }
    };
});