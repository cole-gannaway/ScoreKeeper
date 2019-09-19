import { Component, OnInit } from '@angular/core';
import { Player } from 'src/player';

@Component({
  selector: 'app-ohhell',
  templateUrl: './ohhell.component.html',
  styleUrls: ['./ohhell.component.css']
})
export class OhhellComponent implements OnInit {
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

  addPlayer(){
    var createdPlayer:Player = new Player();
    this.players.push(createdPlayer);
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

}
