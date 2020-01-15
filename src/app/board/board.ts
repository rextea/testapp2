export class Board {
  numbers = [];
  win = false;
  constructor(numCols, numRows, maxNumber) {
    const numbers = [];

    while (numbers.length < numCols * numRows) {
      const r = Math.floor(Math.random() * maxNumber) + 1;
      if (numbers.indexOf(r) === -1) {
        numbers.push(r);
      }
    }
    this.numbers = numbers;
  }

  winner() {
    this.win = true;
  }
}
