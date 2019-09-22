export class Gamelogger {
    log: Array<string>;
    constructor (){
        this.log = Array<string> ();
    }
    createLoggerRow (rowName: string) {
        var retId = this.log.length.toString();
        this.log.push(rowName);
        return retId;
    }
    getById(id: string){
        return this.log[id];
    }
    getLog(){
        return this.log;
    }
}
