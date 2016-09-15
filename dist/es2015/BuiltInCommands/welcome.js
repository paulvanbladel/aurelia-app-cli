var _dec, _class;

import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

export let Welcome = (_dec = inject(HttpClient), _dec(_class = class Welcome {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    help() {
        return "prints the welcome text";
    }

    ResolveCommandLineArgs(args) {}

    UpdateAppCommand(command) {}

    Execute() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                debugger;

                var returnValue = "Hi welcome to the aurelia application CLI version " + this.getVersionNumber();
                resolve(returnValue);
            }, 1);
        });
    }

    getVersionNumber() {

        return "0.0.24";
    }

    getVersionNumberFromPackageJson() {
        return this.httpClient.fetch('package.json').then(response => response.json()).then(data => {
            return data.version;
        });
    }
}) || _class);