export class AppCommand{
    constructor(commandInput){
        this.input= commandInput.trim();
        this.outputType="text";
        this.output = "";
        this.status = "";
        this.isBusy=false;
    }
}