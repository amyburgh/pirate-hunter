import pirateUrl from './assets/pirate.png'
import hunterUrl from './assets/hunter.png'
import pirateMaleUrl from './assets/pirate-male.png'
import pirateFemaleUrl from './assets/pirate-female.png'
import hunterMaleUrl from './assets/hunter-male.png'
import hunterFemaleUrl from './assets/hunter-female.png'

const assets = {
  character: {
    pirate: [
      {
        imgUrl: pirateMaleUrl,
        alt: 'Pirate male character',
      },
      {
        imgUrl: pirateFemaleUrl,
        alt: 'Pirate female character',
      },
    ],
    hunter: [
      {
        imgUrl: hunterMaleUrl,
        alt: 'Hunter male character',
      },
      {
        imgUrl: hunterFemaleUrl,
        alt: 'Hunter female character',
      },
    ],
  },
  role: [
    {
      imgUrl: hunterUrl,
      alt: 'Hunter ship',
    },
    {
      imgUrl: pirateUrl,
      alt: 'Pirate ship',
    },
  ],
}

export default assets
