import Board from "./board";
import Ship from "./ship";

describe('Game Board sizing', () => {  
  const game = new Board()
  it('Rows', () => {
    expect(game.board.length).toBe(10)
  })

  it('Cols', () => {
      game.board.forEach(elem => {
      const len = elem.length
      expect(len).toBe(10)
    })
  })

})

describe('Valid ship placement', () => {
  const game = new Board()
  const ship1 = new Ship({x: 0, y: 0}, {x: 0, y: 2})
  const ship2 = new Ship({x: 9, y: 9}, {x: 9, y: 9})
  it('Place within board', () => {
    game.place(ship1)
    game.place(ship2)

    expect(game.board[0][0]).toBe(ship1)
    expect(game.board[0][1]).toBe(ship1)
    expect(game.board[0][2]).toBe(ship1)
    expect(game.board[1][0]).toBe(null)
    expect(game.board[0][3]).toBe(null)

    expect(game.board[9][9]).toBe(ship2)
  })
})

describe('Invalid ship placement check', () => {
  const game = new Board()
  const ship1 = new Ship({x: 0, y: 0}, {x: 3, y: 0})
  const ship2 = new Ship({x: -1, y: 0}, {x: 3, y: 0})
  const ship3 = new Ship({x: 0, y: 7}, {x: 0, y: 10})
  it('Place off the board', () => {
    expect(game.valid(ship2)).toBe(null)
    expect(game.valid(ship3)).toBe(null)
  })
  it('Place on existing ship', () => {
    game.place(ship1)
    expect(game.valid(ship1)).toBe(null)
  })
})

describe('Recieving attack', () => {
  const game = new Board()
  const ship = new Ship({x: 0, y: 0}, {x: 0, y: 5})
  game.place(ship)
  it('Hit', () => {
    expect(game.reciveAttack({x: 0, y: 0})).toBe(ship)
  })
  it('Miss', () => {
    expect(game.reciveAttack({x: 1, y: 0})).toBe(null)})
})





