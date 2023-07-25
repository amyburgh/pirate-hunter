const ops = {
  selected: null,
}

function board() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const div = document.createElement('div')
  div.classList.add('board')

  for (let i = 0; i < 11; i += 1) {
    for (let j = 0; j < 11; j += 1) {
      const elem = document.createElement('div')
      if (!j && !i) elem.dataset.gutter = true
      else if ((!j && i) || (!i && j)) {
        const p = document.createElement('p')
        if (!j && i) p.textContent = i
        else if (!i && j) p.textContent = letters[j - 1]
        elem.dataset.gutter = true
        elem.appendChild(p)
      } else elem.classList.add('sqr')
      div.appendChild(elem)
    }
  }
  return div
}

function addBoardHandlers() {
  const squares = document.querySelectorAll('.player1 .board .sqr')
  squares.forEach((item) => {
    item.classList.add('red')
  })
}

function addShipHandlers() {
  const ships = document.querySelectorAll('[data-ship]')
  console.log(ships)
  ships.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (ops.selected === e.target) {
        ops.selected = null
      } else if (ops.selected) return
      else ops.selected = e.target
      item.classList.toggle('ship-selected')
      // console.log(ops.selected)
    })
  })
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
  const container = document.createElement('div')
  container.classList.add('yard')

  const label = document.createElement('div')
  label.classList.add('label')
  const p = document.createElement('p')
  p.textContent = name
  label.appendChild(p)
  container.appendChild(label)

  const ships = document.createElement('div')
  if (name === 'SHIPYARD') {
    ships.classList.add('shipyard')
    buildShips().forEach((ship) => ships.appendChild(ship))
  } else if (name === 'GRAVEYARD') {
    ships.classList.add('graveyard')
    buildShipsList().forEach((ship) => ships.appendChild(ship))
  }
  container.appendChild(ships)
  return container
}

function banner({ player, role }) {
  const div = document.createElement('div')
  div.classList.add(role, 'banner')

  const p = document.createElement('p')
  p.textContent = `${player === 1 ? 'your' : 'opponent'} FLEET`

  div.appendChild(p)
  return div
}

function setupBoard({ player, name, role }) {
  const container = document.createElement('section')
  container.classList.add('play', `player${player}`)

  container.appendChild(banner({ player, role }))
  container.appendChild(board())

  if (name !== 'AI') container.appendChild(buildYard('SHIPYARD'))
  else container.appendChild(buildYard('GRAVEYARD'))
  return container
}

function placeShips(p1) {
  addShipHandlers()
  addBoardHandlers()
}

export { placeShips, setupBoard }
