import Board from "./board.js";
import Ship from "./ship.js";

const hunter = new Board()

const pos = {x: 1, y: 2}
const ship = new Ship(3, pos, true)

console.log(ship)

hunter.place(ship)

console.log(hunter)
