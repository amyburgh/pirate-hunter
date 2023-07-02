import Board from "./board.js"
import {print} from "./board.js"
import Ship from "./ship.js"

const pirate = new Board()

const ship1 = new Ship({x: 0, y: 0},{x: 3, y: 0})
const ship2 = new Ship({x: 3, y: 3},{x: 3, y: 8})
const ship3 = new Ship({x: 5, y: 0},{x: 7, y: 0})

pirate.valid(ship1)?.place(ship1)
pirate.valid(ship2)?.place(ship2)
pirate.valid(ship3)?.place(ship3)

const att1 = {x: 0, y: 0}
const att2 = {x: 1, y: 0}
const att3 = {x: 4, y: 0}


const a = pirate.reciveAttack(att1)?.hit(att1)
pirate.reciveAttack(att2)?.hit(att2)
pirate.reciveAttack(att3)?.hit(att3)

console.log('isHit', a.isHit(att1))
console.log('isHit', a.isHit(att3))
console.log('isHit', a.isHit(att2))

console.log('Pirate life:', pirate.life)
console.log('Ships: ', pirate.shipArr.length)
print(pirate.board)
