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
    console.log(this.players);
  }
  sortPlayersByScore(){
    console.log('About to sort');
    this.players = this.players.sort(Player.getComparatorScores());
  }
  addPlayer(){
    var createdPlayer:Player = new Player();
    this.players.push(createdPlayer);
  }
  deletePlayer(i:Number){
    console.log('i is ' + i);
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
  toggleWagerInput(event,i){
    var newClassName = Player.getInitWagerClassName();
    if (event.source.checked){
      newClassName = 'key';
    }
    this.players[i].setWagerClassName(newClassName);
  }
}
