import Ship from "./ship"

describe('Ship methods', () => {
  const start = {x: 0, y: 0}
  const end = {x: 2, y:0}
  it('Create ship', () => {
    expect(new Ship(start, end)).toEqual({
      life: 3,
      length: 3,
      start: start,
      end: end,
      hits: []
    })
  })
  
  it.skip('Create Ship(end, start)', () => {
    expect(new Ship(end, start)).toEqual({
      life: 3,
      length: 3,
      start: start,
      end: end,
      hits: []
    })
  })

  it('Ship hit',() => {
    const ship = new Ship(start, end)
    expect(ship.hit(start)).toEqual({
     life: 2,
      length: 3,
      start: start,
      end: end,
      hits: [start]
    })
  })
})
