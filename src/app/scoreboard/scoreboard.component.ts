import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  players: Array<Player>;
  round: Number;
  constructor() { 
    this.players = new Array<Player>();
    this.round = 7;
  }

  ngOnInit() {
    var createdPlayer:Player = new Player();
    this.players.push(createdPlayer);
  }
  sortPlayersByScore(){
    this.players = this.players.sort(Player.getComparatorScores());
  }
  addPlayer(){
    var createdPlayer:Player = new Player();
    this.players.push(createdPlayer);
  }
  deletePlayer(i:Number){
    this.players.splice(Number(i), 1);
  }
  gotCall(i){
    var player = this.players[i];
    player.score = Number(player.score) + Number(player.getBid()) + Number(10);
  }
  gotJeopardyCall(i){
    var player = this.players[i];
    player.score = Number(player.score) + Number(player.getWager());
  }
  missJeopardyCall(i){
    var player = this.players[i];
    player.score = Number(player.score) - Number(player.getWager());
  }
  debugPlayers(){
    console.log(this.players);
  }
  changeRound(dir){
    if (dir == 'plus'){
      this.round = Number(this.round) + 1;
    }
    else if (dir == 'minus'){
      this.round = Number(this.round) - 1;
    }
    else {
      console.error('Invalid value of dir = ' + dir);
    }
    // reset things
    for (var p of this.players){
      p.resetBid();
      p.resetWager();
      p.resetWagerHide();
      p.resetWagerClassName();
    }
  }
  toggleJeopardyMode(event){
    var jeopardy = document.getElementById('JeopardyModeTable');
    var defTable = document.getElementById('DefaultTable');
    if (event.source.checked){
      defTable.hidden = true;
      jeopardy.hidden = false;
    }
    else {
      defTable.hidden = false;
      jeopardy.hidden = true;
    }
  }
  toggleWagerInput(i){
    var newClassName = Player.getInitWagerClassName();
    console.log(this.players[i].hide);
    if (this.players[i].hide){
      newClassName = 'noShow';
    }
    this.players[i].setWagerClassName(newClassName);
  }
  foo(i){
    if (this.players[i].wager > this.players[i].score){
      this.players[i].wager = this.players[i].score
    }
  }
  toggleHidePlayer(i){
    this.players[i].hide = !this.players[i].hide;
  }
}
