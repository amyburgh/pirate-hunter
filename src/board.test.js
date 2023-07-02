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

describe('Placing a ship on valid squares', () => {
  const game = new Board()
  const ship = new Ship(3, {x:0, y:0}, true)
  game.place(ship)
  it('Place within board', () => {
    expect(game.board[0][0]).toBe(ship)
    expect(game.board[1][0]).toBe(ship)
    expect(game.board[2][0]).toBe(ship)
    
    expect(game.board[3][0]).toBe(null)
    expect(game.board[0][1]).toBe(null)
  })
})

describe('Placing a ship on invalid squares', () => {
  const game = new Board()
  const ship = new Ship(4, {x:1, y:1}, false)
  const ship1 = new Ship(5, {x:-1, y:0}, true)
  const ship2 = new Ship(3, {x:10, y:10}, false)
  const ship3 = new Ship(4, {x:1, y:1}, false)
  it('Place off the board', () => {
    expect(game.valid(ship1)).toBe(false)
    expect(game.valid(ship2)).toBe(false)
  })
  it('Place on existing ship', () => {
    game.place(ship)
    expect(game.valid(ship3)).toBe(false)
  })
})

