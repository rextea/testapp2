import { Component } from '@angular/core';
import { GameService } from './game.service';
import { Board } from './board/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  boards: Array<Board> = [];

  constructor(public game: GameService) {
    this.boards = game.boards;
  }
}
