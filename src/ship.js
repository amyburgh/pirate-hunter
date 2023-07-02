export default class Ship {
  constructor(length, {x, y}, isVert) {
    this.length = length
    this.pos = {x, y} //pos = {x: 0, y: 0}
    this.isVert = isVert
    this.hits = 0
  }

  hit() {
    this.hits += 1
  }

  isSunk() {
    return this.length === this.hits
  }
}
