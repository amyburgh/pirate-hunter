function board() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const div = document.createElement('div')
  div.classList.add('board')

  for (let i = 0; i < 11; i += 1) {
    for (let j = 0; j < 11; j += 1) {
      const elem = document.createElement('div')
      if ((!j && i) || (!i && j)) {
        const p = document.createElement('p')
        if (!j && i) p.textContent = i
        else if (!i && j) p.textContent = letters[j - 1]
        elem.dataset.gutter = true
        elem.appendChild(p)
      }
      div.appendChild(elem)
    }
  }
  return div
}

function buildShips() {
  const sizes = [4, 3, 2, 5, 3]
  const ships = []

  sizes.forEach((item) => {
    const div = document.createElement('div')
    div.dataset.ship = item // change to id
    for (let i = 0; i < item; i += 1) {
      const circle = document.createElement('div')
      circle.dataset.hit = false
      div.appendChild(circle)
    }
    ships.push(div)
  })
  return ships
}

function buildShipsList() {
  const shipTypes = {
    Galley: 4,
    Sloop: 3,
    Dinghy: 2,
    Galleon: 5,
    Cutter: 3,
  }
  const ships = []

  Object.keys(shipTypes).forEach((key) => {
    const div = document.createElement('div')
    div.dataset.sunk = false
    const p = document.createElement('p')
    p.textContent = `${key} (${shipTypes[key]})`
    div.appendChild(p)
    ships.push(div)
  })
  return ships
}

function buildYard(name) {
  const div = document.createElement('div')
  div.classList.add('yard')

  const label = document.createElement('div')
  label.classList.add('label')
  const p = document.createElement('p')
  p.textContent = name
  label.appendChild(p)
  div.appendChild(label)

  const ships = document.createElement('div')
  if (name === 'SHIPYARD') {
    ships.classList.add('ships')
    buildShips().forEach((ship) => ships.appendChild(ship))
  } else if (name === 'GRAVEYARD') {
    ships.classList.add('ship-list')
    buildShipsList().forEach((ship) => ships.appendChild(ship))
  }
  div.appendChild(ships)
  return div
}

function PlayArea() {
  const section = document.createElement('section')
  section.classList.add('play')

  const div = document.createElement('div')
  div.classList.add('hunter', 'banner')

  const p = document.createElement('p')
  p.textContent = 'HUNTER FLEET'

  div.appendChild(p)
  section.appendChild(div)
  section.appendChild(board())
  section.appendChild(buildYard('SHIPYARD'))
  // section.appendChild(buildYard('GRAVEYARD'))
  return section
}

// Select Character

function playGame(p1, p2) {}

export { playGame, PlayArea }
