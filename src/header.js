import logoUrl from './assets/flag.png'
import githubUrl from './assets/github-mark.svg'
import titleUrl from './assets/title.png'

function Header() {
  const header = document.createElement('header')

  const title = document.createElement('img')
  title.src = titleUrl
  title.alt = 'Pirate hunter'
  title.classList.add('title')

  const logo = document.createElement('img')
  logo.src = logoUrl
  logo.alt = 'Pirate flag'
  logo.classList.add('logo')

  const a = document.createElement('a')
  const github = document.createElement('img')
  github.src = githubUrl
  github.classList.add('github')

  a.appendChild(github)
  header.appendChild(logo)
  header.appendChild(title)
  header.appendChild(a)
  return header
}

export default Header
