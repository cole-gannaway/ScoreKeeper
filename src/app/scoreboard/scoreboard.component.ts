import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  players: Array<Player>;

  constructor() { 
    this.players = new Array<Player>();
  }

  ngOnInit() {
    var numPlayers = 3;
    for (var i = 0; i < numPlayers; i++){
      var createdPlayer:Player = new Player();
      createdPlayer.setName('Created' + i);
      this.players.push(createdPlayer);
    }
    console.log(this.players);
  }

  deletePlayer(i:Number){
    console.log('i is ' + i);
    this.players.splice(Number(i), 1);
  }
  gotCall(i){
    var player = this.players[i];
    player.score = Number(player.score) + Number(10);
  }

}
