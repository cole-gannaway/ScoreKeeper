import { UrlHandlingStrategy } from '@angular/router';

var initWagerClassName = 'wagerInput';
export class Player {
    name: string;
    bid: Number;
    score: Number;
    wager: Number;
    wagerClassName: string;

    constructor(){
        this.name = '';
        this.bid = null;
        this.score = 0;
        this.wager = null;
        this.wagerClassName = initWagerClassName;
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
    static getComparatorScores (){
        return function(a:Player, b:Player) {
            return Number(b.score) - Number(a.score);
        }
    }
    static getInitWagerClassName(){
        return initWagerClassName;
    }
}
