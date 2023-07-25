import './style.css'
import Header from './header'
import { setupBoard, placeShips } from './play'
import { role, character } from './select'

import Player from './player'

console.log('App running...')

function createGame({ name, role }) {
  console.log('create game')
  const container = document.querySelector('main')

  const p1 = new Player({ name, role })
  const p2 = new Player({
    name: 'AI',
    role: p1.role === 'hunter' ? 'pirate' : 'hunter',
  })

  console.log(p1)
  console.log(p2)
  container.appendChild(setupBoard(p1))
  container.appendChild(setupBoard(p2))

  placeShips(p1)
}

function main() {
  const App = document.querySelector('#app')
  App.appendChild(Header())

  const container = document.createElement('main')
  container.appendChild(role.create({}))
  App.appendChild(container)

  document.querySelector('#next').addEventListener('click', () => {
    container.appendChild(character.create(role.player))
    document.querySelector('#start').addEventListener(
      'click',
      () => {
        createGame({ ...role.player, ...character.player })
      },
      false,
    )
  })
}

main()
