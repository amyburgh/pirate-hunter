export default class Board {
  constructor(size = 10) {
    this.shipArr = []
    this.misses = []
    this.map = new Array(size).fill(null).map(() => Array(size).fill(null))
  }

  valid(ship) {
    if (!ship) return null

    const { x, y } = ship.start
    const max = this.map.length
    // Check if within game map
    if (x < 0 || y < 0 || ship.end.x >= max || ship.end.y >= max) return null
    // Check if square is empty
    for (let i = 0; i < ship.length; i++) {
      if (x === ship.end.x && this.map[x][y + i] !== null) return null
      else if (y === ship.end.y && this.map[x + i][y] !== null) return null
    }
    return this
  }

  place(ship) {
    if (!ship) return null

    this.shipArr.push(ship)
    const { x, y } = ship.start
    for (let i = 0; i < ship.length; i++) {
      if (x === ship.end.x) this.map[x][y + i] = ship
      else this.map[x + i][y] = ship
    }
    return this
  }

  // Returns: Ship if hit
  reciveAttack({ x, y }) {
    if (!this.map[x][y] && !this.isMiss({ x, y })) {
      this.misses.push({ x, y })
    }
    return this.map[x][y]
  }

  isMiss(pos) {
    return (
      this.misses.find((e) => {
        return e.x === pos.x && e.y === pos.y
      }) !== undefined
    )
  }
}
