var _dec, _class;

import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

export let Welcome = (_dec = inject(HttpClient), _dec(_class = class Welcome {

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  help() {
    return 'prints the welcome text';
  }

  resolveCommandLineArgs(args) {}

  updateAppCommand(command) {}

  execute() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let returnValue = 'Hi welcome to the aurelia application CLI version ' + this.getVersionNumber();
        resolve(returnValue);
      }, 1);
    });
  }

  getVersionNumber() {
    return '0.0.29';
  }

  getVersionNumberFromPackageJson() {
    return this.httpClient.fetch('package.json').then(response => response.json()).then(data => {
      return data.version;
    });
  }
}) || _class);