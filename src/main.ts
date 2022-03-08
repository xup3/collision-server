import Collision from "./collision"
import Player from "./player"
import Playingfield from "./playingfield"

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Game Changer!</h1>
`

const playingfield = new Playingfield({start: 0, end: 1024})

const player1 = new Player({x: 10, y: 10})

const collision1 = new Collision({x: 200, y: 100})
const collision2 = new Collision({x: 200, y: 100})

console.log("Playingfield:", playingfield.dimension);

console.log("Player 1:", player1.currentHealth, player1.currentPosition);
player1.setDamage(20);
console.log("Player 1:", player1.currentHealth, player1.currentPosition);

console.log("Collision 1:", collision1.pos)
console.log("Collision 2:", collision2.pos)