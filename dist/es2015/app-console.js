var _dec, _dec2, _class;

import { customElement, bindable, bindingMode, All, inject } from 'aurelia-framework';
import { AppCommand } from './app-command';
const ENTER_KEY = 13;
const KEY_UP = 38;
const KEY_DOWN = 40;

export let AppConsoleCustomElement = (_dec = inject(All.of('Command')), _dec2 = customElement('app-console'), _dec(_class = _dec2(_class = class AppConsoleCustomElement {

    constructor(commandList) {
        this.newCommandInput = "";
        this.history = [];
        this.cmdOffset = 0;
        this.commandList = commandList;
        debugger;
        this.mergeBuiltInCommands();
    }

    mergeBuiltInCommands() {}

    onKeyUp(ev) {
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
    }

    isHtml(item) {
        return item.outputType === "html";
    }

    isText(item) {
        return !this.isHtml(item);
    }

    addNewCommand() {
        var newCommand = new AppCommand(this.newCommandInput);
        this.newCommandInput = "";

        this.history.push(newCommand);

        newCommand.isBusy = true;

        var args = this.getArgs(newCommand.input);
        var cmd = args[0].toUpperCase();

        var method = this.commandList.find(c => c.constructor.name.toUpperCase() === cmd);

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

        return method.Execute().then(r => {
            newCommand.output = r;
            newCommand.status = "ok";
        }).catch(e => {
            newCommand.outputType = "text";
            newCommand.output = e;
            newCommand.status = "error";
        }).finally(() => {
            newCommand.isBusy = false;
        });
    }

    getArgs(cmdLine) {
        var tokenEx = /[^\s"]+|"[^"]*"/g;
        var quoteEx = /"/g;
        var args = cmdLine.match(tokenEx);

        for (var i = 0; i < args.length; i++) {
            args[i] = args[i].replace(quoteEx, '');
        }
        return args;
    }

}) || _class) || _class);