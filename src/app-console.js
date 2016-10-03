
import {customElement, All, inject} from 'aurelia-framework';
import {AppCommand} from './app-command';
const ENTER_KEY = 13;
const KEY_UP = 38;
const KEY_DOWN = 40;
@inject(All.of('Command'))
@customElement('app-console')
export class AppConsoleCustomElement {

  constructor(commandList) {
    this.newCommandInput = '';
    this.history = [];
    this.cmdOffset = 0;
    this.commandList = commandList;
    this.runStartupCommand();
  }

  runStartupCommand() {
    this.newCommandInput = 'welcome';
    this.addNewCommand(this.newCommand);
  }

  onKeyUp(ev) {
    switch (ev.keyCode) {
    case ENTER_KEY:
      this.newCommandInput = this.newCommandInput.trim();
      if (this.newCommandInput !== '') {
        this.addNewCommand(this.newCommandInput);
        ev.preventDefault();
      }
      break;

    case KEY_UP:
      if ((this.history.length + this.cmdOffset) > 0) {
        this.cmdOffset--;
        this.newCommandInput = (this.history[this.history.length + this.cmdOffset]).input;
        ev.preventDefault();
      }
      break;

    case KEY_DOWN:
      if (this.cmdOffset < -1) {
        this.cmdOffset++;
        this.newCommandInput = (this.history[this.history.length + this.cmdOffset]).input;
        ev.preventDefault();
      }
      break;
    default:
      //pro memory
    }
  }

  isHtml(item) {
    return item.outputType === 'html';
  }

  isText(item) {
    return !this.isHtml(item);
  }

  addNewCommand() {
    let newCommand = new AppCommand(this.newCommandInput);
    this.newCommandInput = '';

    this.history.push(newCommand);

    newCommand.isBusy = true;

    let args = this.getArgs(newCommand.input);        //Split command line into token array
    let cmd = args[0].toUpperCase();            //1st token is the command name

    let method = this.commandList.find(c => c.constructor.name.toUpperCase() === cmd);

    if (method === undefined) {
      newCommand.output = 'unknown command';
      newCommand.status = 'error';
      newCommand.isBusy = false;
      return;
    }

    if (cmd === 'CLS') {
      this.history = [];
      return;
    }


    method.updateAppCommand(newCommand);

    method.resolveCommandLineArgs(args);

    return method.execute()
      .then(r => {
        newCommand.output = r;
        newCommand.status = 'ok';
      })
      .catch(e => {
        newCommand.outputType = 'text';
        newCommand.output = e;
        newCommand.status = 'error';
      })
      .finally(() => {
        newCommand.isBusy = false;
      });
  }

  getArgs(cmdLine) {
    let tokenEx = /[^\s"]+|"[^"]*"/g;   //Matches (1 or more chars that are NOT space or ") or a " any # of chars not a quote, followed by a quote
    let quoteEx = /"/g;                 //Matches "
    let args = cmdLine.match(tokenEx);

    //Remove any quotes that may be in the args
    for (let i = 0; i < args.length; i++) {
      args[i] = args[i].replace(quoteEx, '');
    }
    return args;
  }

}
