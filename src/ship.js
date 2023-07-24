/*
 * === For clarity ===
 * ship horizontal: start.x === end.x (rows = x)
 * ship vertical  : start.y === end.y (cols = y)
 */
export default class Ship {
  constructor(start = null, end = null) {
    this.life = this.setLife(start, end)
    this.length = this.life
    this.start = start
    this.end = end
    this.hits = []
  }

  setLife(start, end) {
    if (!start || !end) return 0 
    return Math.max(
      Math.abs(end.x - start.x), 
      Math.abs(end.y - start.y)
    ) + 1
  }

  // For rendering only
  isHit(pos) {
    return this.hits.find(e => {
      return e.x == pos.x && e.y == pos.y
    }) !== undefined
  }

  hit(pos) {
    this.hits.push(pos)
    if (this.life) this.life -= 1
    return this
  }

  sunk() {
    return !this.life
  }
}
