export default class Board {
  constructor(size = 10) {
    this.board = new Array(size).fill(0).map(() => Array(size).fill(0))
  }

}
