import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/player';

@Component({
  selector: 'app-jeopardy-scoreboard',
  templateUrl: './jeopardy-scoreboard.component.html',
  styleUrls: ['./jeopardy-scoreboard.component.css']
})
export class JeopardyScoreboardComponent implements OnInit {
  @Input('data') players: Array<Player>;

  constructor() { }

  ngOnInit() {
  }
  
  toggleHideWagerInput(i){
    var newClassName = Player.getInitWagerClassName();
    if (this.players[i].hide){
      newClassName = 'noShow';
    }
    this.players[i].setWagerClassName(newClassName);
  }
  deletePlayer(i:Number){
    this.players.splice(Number(i), 1);
  }
  gotJeopardyCall(i){
    var player = this.players[i];
    player.score = Number(player.score) + Number(player.getWager());
  }
  missJeopardyCall(i){
    var player = this.players[i];
    player.score = Number(player.score) - Number(player.getWager());
  }
  boundWagerByScore(i){
    if (this.players[i].wager > this.players[i].score){
      this.players[i].wager = this.players[i].score
    }
  }
}
