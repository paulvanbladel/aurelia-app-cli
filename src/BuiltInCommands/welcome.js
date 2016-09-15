import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Welcome {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    help() {
        return "prints the welcome text";
    }

    ResolveCommandLineArgs(args) {
    }

    UpdateAppCommand(command) {
    }

    Execute() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                debugger;

                 
                var returnValue = "Hi welcome to the aurelia application CLI version " + this.getVersionNumber();
                resolve(returnValue);
            }, 1);
        });
    }

//hard time to get this work with await async, for the time being hard coding version
//    async getVersionNumber() {
    getVersionNumber() {
        
        //let data = await this.getVersionNumberFromPackageJson();
        
        return "0.0.24";
    }

     getVersionNumberFromPackageJson() {
        return this.httpClient.fetch('package.json')
            .then(response => response.json())
            .then(data => {
                return data.version;
            });
    }
}