import { Component, OnInit } from '@angular/core';
import { Player } from 'src/player';
import { Gamelogger } from '../gamelogger';

@Component({
  selector: 'app-ohhell',
  templateUrl: './ohhell.component.html',
  styleUrls: ['./ohhell.component.css']
})
export class OhhellComponent implements OnInit {
  players: Array<Player>;
  round: Number;
  log: Gamelogger;
  showLogGrid: boolean;
  constructor() { 
    this.players = new Array<Player>();
    this.round = 7;
    this.log = new Gamelogger();
    this.showLogGrid = false;
  }

  ngOnInit() {
    var createdPlayer:Player = new Player();
    this.players.push(createdPlayer);
  }

  addPlayer(){
    var createdPlayer:Player = new Player();
    this.players.push(createdPlayer);
  }
  changeRound(dir){
    var loggerId = this.log.createLoggerRow(this.round.toString());
    var prevRound = this.round;
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
      // log the changes
      p.addLog(loggerId);
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
  toggleShowLogGrid(){
    this.showLogGrid = !this.showLogGrid;
  }

}
