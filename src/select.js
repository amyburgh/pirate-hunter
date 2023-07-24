import assets from './assets'

function image(arr) {
  const container = document.createElement('div')
  container.classList.add('role')

  arr.forEach((item) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = item.imgUrl
    img.alt = item.alt
    div.appendChild(img)
    container.appendChild(div)
  })

  return container
}

function dots(n = 2) {
  const container = document.createElement('div')
  container.classList.add('dots')

  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div')
    div.classList.add('dot')
    container.appendChild(div)
  }
  return container
}

function roleSelect() {
  const player = {
    role: '',

    get getRole() {
      return this.role
    },

    set setRole(role) {
      this.role = role
    },
  }

  function handleSwitch() {
    const container = document.querySelector('[data-role]')

    if (container.dataset.role === 'hunter') container.dataset.role = 'pirate'
    else container.dataset.role = 'hunter'

    const p = document.querySelector('.selector>p')
    p.textContent = container.dataset.role
  }

  function selector() {
    const container = document.createElement('div')
    container.classList.add('selector')
    const p = document.createElement('p')
    p.textContent = 'hunter'

    const leftBtn = document.createElement('button')
    leftBtn.innerText = 'ᐸ'
    const rightBtn = document.createElement('button')
    rightBtn.innerText = 'ᐳ'

    leftBtn.onclick = () => handleSwitch()
    rightBtn.onclick = () => handleSwitch()

    container.append(leftBtn, p, rightBtn)
    return container
  }

  function nextBtn() {
    const btn = document.createElement('button')
    btn.id = 'next'
    btn.textContent = `NEXT`
    btn.addEventListener(
      'click',
      () => {
        const role = document.querySelector('[data-role]')
        player.setRole = role.dataset.role
        role.remove()
      },
      false,
    )
    return btn
  }

  function create({ role = 'hunter' }) {
    const container = document.createElement('div')
    container.classList.add('select')
    container.dataset.role = role

    container.appendChild(image(assets.role))
    container.appendChild(dots())
    container.appendChild(selector())
    container.appendChild(nextBtn())
    return container
  }

  return { create, player }
}

function characterSelect() {
  const player = {
    name: '',

    get getName() {
      return this.name
    },

    set setName(name) {
      this.name = name
    },
  }

  function handleSwitch() {
    const container = document.querySelector('[data-character]')

    if (container.dataset.character === 'male')
      container.dataset.character = 'female'
    else container.dataset.character = 'male'
  }

  function selectorCharacter() {
    const container = document.createElement('div')
    container.classList.add('selector')
    const div = document.createElement('div')
    div.classList.add('edit-name')

    const input = document.createElement('input')
    input.placeholder = 'ENTER HERE'
    input.type = 'text'
    input.id = 'name'
    div.append(input)

    const leftBtn = document.createElement('button')
    leftBtn.innerText = 'ᐸ'
    const rightBtn = document.createElement('button')
    rightBtn.innerText = 'ᐳ'

    leftBtn.onclick = () => handleSwitch()
    rightBtn.onclick = () => handleSwitch()

    container.append(leftBtn, div, rightBtn)
    return container
  }

  function startBtn() {
    const btn = document.createElement('button')
    btn.textContent = `LET'S GO!`
    btn.id = 'start'
    btn.addEventListener(
      'click',
      () => {
        player.setName = document.querySelector('#name').value
        document.querySelector('[data-character]').remove()
      },
      false,
    )
    return btn
  }

  function create({ role = 'hunter' }) {
    const container = document.createElement('div')
    container.classList.add('select')
    container.dataset.character = 'male'

    container.appendChild(image(assets.character[role]))
    container.appendChild(dots())
    container.appendChild(selectorCharacter())
    container.appendChild(startBtn())
    return container
  }

  return { create, player }
}

const role = roleSelect()
const character = characterSelect()

export { role, character }
