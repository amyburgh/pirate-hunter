import Board from './board.js'

export default class Player {
  static turn = true

  static count = 0

  constructor({ name, role, boardSize }) {
    this.life = 0
    this.player = this.constructor.count += 1
    this.name = name || 'Captain'
    this.role = role
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
