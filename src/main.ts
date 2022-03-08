import Collision from "./collision"
import Game from "./game"
import Player from "./player"
import Playingfield from "./playingfield"

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Game Changer!</h1>
`

const player1 = new Player({x: 10, y: 10}, 1)
const player2 = new Player({x: 20, y: 20}, 2)

const playingfield = new Playingfield({start: 0, end: 1024})

const game1 = new Game([player1, player2], playingfield);

console.log(game1.getArea.dimension);

const collision1 = new Collision({x: 200, y: 100})
const collision2 = new Collision({x: 200, y: 100})

player1.setDamage(20);

console.log("Collision 1:", collision1.pos)
console.log("Collision 2:", collision2.pos)