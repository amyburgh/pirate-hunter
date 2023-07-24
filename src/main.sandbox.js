import Player from "./player.js"
import Ship from "./ship.js"
import print from "./print.js"

const p1 = new Player({name: 'Aaron', role: 'hunter'})
const p2 = new Player({name: 'AI', role: 'Pirate'})

const ships = []
ships.push(new Ship({x: 0, y: 0},{x: 3, y: 0}))
ships.push(new Ship({x: 3, y: 3},{x: 3, y: 7}))
ships.push(new Ship({x: 5, y: 0},{x: 7, y: 0}))
ships.push(new Ship({x: 5, y: 7},{x: 6, y: 7}))
ships.push(new Ship({x: 9, y: 7},{x: 9, y: 9}))

ships.forEach(ship => p1.board.valid(ship)?.place(ship))

p2.attack(p1, {x: 0,y: 0})
p2.attack(p1, {x: 1,y: 0})
p2.attack(p1, {x: 2,y: 0})
p2.attack(p1, {x: 3,y: 0})
p2.attack(p1, {x: 6,y: 7})

p2.attack(p1, {x: 0,y: 3})
p2.attack(p1, {x: 7,y: 5})

console.log(`▷`, p1.name)
console.log('♡', p1.life)
console.log(print(p1.board))
