import './style.css'
import Header from './header'
import { playGame, PlayArea } from './play'
import { role, character } from './select'

import Player from './player'

console.log('App running...')

const App = document.querySelector('#app')
App.appendChild(Header())

function startGame({ name, role }) {
  console.log('Play game')
  console.log(name, role)
  const container = document.querySelector('main')

  const p1 = new Player({ name, role })
  const p2 = new Player({
    name: 'AI',
    role: p1.role === 'hunter' ? 'pirate' : 'hunter',
  })

  container.appendChild(PlayArea(p1))
  container.appendChild(PlayArea(p2))
}

function main() {
  const container = document.createElement('main')
  container.appendChild(role.create({}))
  App.appendChild(container)

  document.querySelector('#next').addEventListener('click', () => {
    container.appendChild(character.create(role.player))
    document.querySelector('#start').addEventListener(
      'click',
      () => {
        startGame({ ...role.player, ...character.player })
      },
      false,
    )
  })
}

main()
