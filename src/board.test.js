import Board from "./board";

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