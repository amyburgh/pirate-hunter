export default class Board {
  life = 0

  constructor(size = 10) {
    this.shipArr = []
    this.board = new Array(size).fill(null).map(() => Array(size).fill(null))
  }

   valid(ship) {
    if (!ship) return null

    const { x, y } = ship.start
    const max = this.board.length

    // Check if within game board
    if (x < 0 || y < 0 || ship.end.x >= max || ship.end.y >= max) return null

    // Check if square is empty
    for (let i = 0; i < ship.length; i++) {
      if (x === ship.end.x && this.board[x][y + i] !== null) return null
      else if (this.board[x + i][y] !== null) return null
    }
    return this
  }

  place(ship) {
    if (!ship) return null

    this.life += ship.life
    this.shipArr.push(ship)
    
    const { x, y } = ship.start
    for (let i = 0; i < ship.length; i++) {
      if(x === ship.end.x) this.board[x][y + i] = ship
      else this.board[x + i][y] = ship
    }
    return this
  }

  // Returns: Ship if hit
  reciveAttack({x, y}) {
    if (this.board[x][y] === null) {
      this.board[x][y] = 'o'
      return null
    }
    this.board.life -= 1
    return this.board[x][y]
  }
}

export function print(arr){
  const border = '+++++++++++++++++++++++'
  console.log(border)
  let pos = {x: 0, y: 0}
  arr.forEach(elem => {
    let row = '+ '
    elem.forEach(item => {
      if(item === null) row += '  '
      else if (item === 'o') row += 'o '
      else if (item?.isHit(pos)) row += '* '
      else row += `${item.length} `
      pos.y += 1
    })
    row += '+'
    console.log(row)
    pos.x += 1
  })
  console.log(border)
}
