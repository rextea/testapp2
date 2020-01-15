import { Injectable } from '@angular/core';
import { Board } from './board/board';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  numOfBoards = 6;
  maxNumber = 52;
  numRows = 5;
  numCols = 5;
  isPlaying: boolean = false;
  selectedNumbers = [];
  boards: Array<Board> = [];

  constructor() {
      for (let i = 0; i < this.numOfBoards; i++) {
        this.boards.push(new Board(this.numCols, this.numRows, this.maxNumber));
      }

      this.isPlaying = true;
  }

  nextNumber() {
    if (this.isPlaying) {
      this.selectedNumbers.push(this.generateUniqueNumber());

      this.checkForWinners();

      if (this.selectedNumbers.length == this.maxNumber) {
        this.isPlaying = false;
      }
    }
  }

  setWinner(board) {
    this.isPlaying = false;
    board.winner();
  }

  checkForWinners() {
    for (let board of this.boards) {

      // check rows:
      for (let i = 1; i < this.numRows*this.numCols; i+=this.numCols) {
        let fullRow = true;
        for (let x = i; x < i+this.numCols; x++) {
          if (!this.isSelected(board.numbers[x-1])) {
            fullRow = false;
          }
        }
        if (fullRow) {
          this.setWinner(board);
        console.log('row');

        }
      }
      
      // check cols:
      for (let i = 1; i < this.numCols; i++) {
        let fullCol = true;
        for (let x = i; x < this.numCols*this.numRows; x += this.numCols) {
          if (!this.isSelected(board.numbers[x])) {
            fullCol = false;
          }
        }
        if (fullCol) {
          this.setWinner(board);
        console.log('col');

        }
      }

      // check diagonal
      let fullDiagonal = true;
      for (let i = 1; i <= this.numRows * this.numCols; i=i+this.numCols+1) {
        if (!this.isSelected(board.numbers[i-1])) {
          fullDiagonal = false;
         }
      }
      if (fullDiagonal) {
        this.setWinner(board);
        console.log('diagonal_ltr');
       }

      let fullDiagonal_2 = true;

      for (let i = this.numCols; i < this.numCols * this.numRows; i=i+(this.numCols-1)) {
        if (!this.isSelected(board.numbers[i-1])) {
          fullDiagonal_2 = false;
        }
      }
      if (fullDiagonal_2) {
        this.setWinner(board);
        console.log('diagonal_rtl');
      }
    }
  }

  generateUniqueNumber() {
    const currentNumbers = this.selectedNumbers;
    while (currentNumbers.length < currentNumbers.length + 1) {
      const r = Math.floor(Math.random() * this.maxNumber) + 1;
      if (currentNumbers.indexOf(r) === -1) {  return r; }
   }
  }

  isSelected(num) {
    if (this.selectedNumbers.indexOf(num) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

