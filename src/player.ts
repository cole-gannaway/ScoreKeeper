import { UrlHandlingStrategy } from '@angular/router';
import { RoundLogTimeStamp } from './app/round-log-time-stamp';

var initWagerClassName = 'wagerInput';
export class Player {
    name: string;
    bid: Number;
    score: Number;
    wager: Number;
    wagerClassName: string;
    hide: boolean;
    log: any;

    constructor(){
        this.name = null;
        this.bid = null;
        this.score = 0;
        this.wager = null;
        this.wagerClassName = initWagerClassName;
        this.hide = false;
        this.log = {};
    }
    setName(n:string) {
        this.name = n;
    }
    setBid(n:Number){
        this.bid = n;
    }
    resetBid(){
        this.bid = null;
    }
    getBid(){
        if (this.bid){
            return this.bid;
        }
        return 0;
    }
    setWager(n:Number){
        this.wager = n;
    }
    resetWager(){
        this.wager = null;
    }
    getWager(){
        if (this.wager){
            return this.wager;
        }
        return 0;
    }
    setWagerClassName (n:string){
        this.wagerClassName = n;
    }
    resetWagerClassName (){
        this.wagerClassName = initWagerClassName;
    }
    resetWagerHide(){
        this.hide = false;
    }
    addLog(id:string){
        this.log[id] = this.score;
    }
    static getComparatorScores (){
        return function(a:Player, b:Player) {
            return Number(b.score) - Number(a.score);
        }
    }
    static getInitWagerClassName(){
        return initWagerClassName;
    }

}
