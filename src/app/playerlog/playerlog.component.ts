import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/player';
import { Gamelogger } from '../gamelogger';

@Component({
  selector: 'app-playerlog',
  templateUrl: './playerlog.component.html',
  styleUrls: ['./playerlog.component.css']
})
export class PlayerlogComponent implements OnInit {
  @Input('log') logger: Gamelogger;
  @Input('data') players: Array<Player>;
  @Input('showLog') showTable: boolean;
  constructor() { 
    this.showTable = false;
  }

  ngOnInit() {
  }
  debugLog(){
    for (var p of this.players){
      console.log(p.log);
    }
  }
  toggleShowTable(){
    this.showTable = !this.showTable;
  }

}
