import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  numbers = [];
  @Input () board: Board;

  constructor(public game: GameService) {

  }

  ngOnInit() {
    this.numbers = this.board.numbers;
  }



}
