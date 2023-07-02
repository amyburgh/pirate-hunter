export default class Board {
  life = 0

  constructor(size = 10) {
    this.shipArr = []
    this.board = new Array(size).fill(null).map(() => Array(size).fill(null))
  }

  place(ship) {
    this.life += ship.length
    this.shipArr.push(ship)
    const { x, y } = ship.pos
    for (let i = 0; i < ship.length; i++) {
      if (ship.isVert) this.board[x + i][y] = ship
      else this.board[x][y + i] = ship
    }
  }

  valid(ship) {
    const { x, y } = ship.pos
    const max = this.board.length - 1
    if (x < 0 || y < 0) return false
    for (let i = 0; i < ship.length; i++) {
      if (ship.isVert) {
        if (x + i > max || y > max || this.board[x + i][y] !== null)
          return false
      } else if (x > max || y + i > max || this.board[x][y + i] !== null)
        return false
    }
    return true
  }
}
