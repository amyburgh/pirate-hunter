import Board from "./board";
import Ship from "./ship";

describe('Game board sizing', () => {  
  const board = new Board()
  it('Rows', () => {
    expect(board.map.length).toBe(10)
  })

  it('Cols', () => {
      board.map.forEach(elem => {
      const len = elem.length
      expect(len).toBe(10)
    })
  })

})

describe('Valid ship placement', () => {
  const board = new Board()
  const ship1 = new Ship({x: 0, y: 0}, {x: 0, y: 2})
  const ship2 = new Ship({x: 9, y: 9}, {x: 9, y: 9})
  it('Place within board map', () => {
    board.place(ship1)
    board.place(ship2)

    expect(board.map[0][0]).toBe(ship1)
    expect(board.map[0][1]).toBe(ship1)
    expect(board.map[0][2]).toBe(ship1)
    expect(board.map[1][0]).toBe(null)
    expect(board.map[0][3]).toBe(null)

    expect(board.map[9][9]).toBe(ship2)
  })
})

describe('Invalid ship placement check', () => {
  const board = new Board()
  const ship1 = new Ship({x: 0, y: 0}, {x: 3, y: 0})
  const ship2 = new Ship({x: -1, y: 0}, {x: 3, y: 0})
  const ship3 = new Ship({x: 0, y: 7}, {x: 0, y: 10})
  it('Place off the board map', () => {
    expect(board.valid(ship2)).toBe(null)
    expect(board.valid(ship3)).toBe(null)
  })
  it('Place on existing ship', () => {
    board.place(ship1)
    expect(board.valid(ship1)).toBe(null)
  })
})

describe('Recieving attack', () => {
  const board = new Board()
  const ship = new Ship({x: 0, y: 0}, {x: 0, y: 5})
  board.place(ship)
  it('Hit', () => {
    expect(board.reciveAttack({x: 0, y: 0})).toBe(ship)
  })
  it('Miss', () => {
    expect(board.reciveAttack({x: 1, y: 0})).toBe(null)})
})





