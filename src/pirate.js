import Ship from "./ship";

export default class Pirate extends Ship {
  static life = 0

  constructor(length) {
    super(length)
    this.constructor.life += length
  }


  static getLife() {
    return Pirate.life
  }
}
