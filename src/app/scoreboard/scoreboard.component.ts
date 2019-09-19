import { Component, OnInit, Input} from '@angular/core';
import { Player } from '../../player';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  @Input('data') players: Array<Player>;
  round: Number;
  constructor() { 
  }
  ngOnInit() {
  }
  sortPlayersByScore(){
    this.players = this.players.sort(Player.getComparatorScores());
  }
  deletePlayer(i:Number){
    this.players.splice(Number(i), 1);
  }
  gotCall(i){
    var player = this.players[i];
    player.score = Number(player.score) + Number(player.getBid()) + Number(10);
  }
}
