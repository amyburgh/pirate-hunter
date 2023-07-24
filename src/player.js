import Board from './board.js'

export default class Player {
  static turn = true

  constructor({ name = 'Admiral', role = 'hunter', boardSize } = {}) {
    this.life = 0
    this.name = name ?? 'Admiral'
    this.role = role ?? 'hunter'
    this.board = new Board(boardSize)
  }

  setRole(role) {
    this.role = role
  }

  update() {
    let life = 0
    this.board.shipArr.forEach((ship) => {
      life += ship.life
    })
    this.life = life
    Player.turn = !Player.turn
    return this
  }

  takeHit() {
    this.life -= 1
  }

  attack(opponent, pos) {
    const ship = opponent.board.reciveAttack(pos)?.hit(pos)
    if (!ship) return
    opponent.takeHit()
    if (ship.sunk()) console.log('Ship Sunk')
    return opponent.update()
  }

  static isTurn() {
    return Player.turn
  }
}
