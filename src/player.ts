
export class Player {
    name: string;
    bid: Number;
    score: Number;
    wager: Number;
    wagerClassName: string;

    constructor(){
        this.name = '';
        this.bid = 0;
        this.score = 0;
        this.wager = 0;
    }
    setName(n:string) {
        this.name = n;
    }
    setWagerClassName (n:string){
        this.wagerClassName = n;
    }
    static getComparatorScores (){
        return function(a:Player, b:Player) {
            return Number(b.score) - Number(a.score);
        }
    }
}
