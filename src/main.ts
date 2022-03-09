import Collision from "./collision"
import Game from "./game"
import Player from "./player"
import Playingfield from "./playingfield"
import Projectile from "./projectile"

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Game Changer!</h1>
`

const player1 = new Player({x: 10, y: 10, z: 0}, 1)
const player2 = new Player({x: 20, y: 20, z: 0}, 2)

const playingfield = new Playingfield({start: 0, end: 1024})

const game1 = new Game([player1, player2], playingfield);

const collisionDetection = new Collision;

console.log(game1);

const projectile1 = new Projectile({x: 200, y: 100, z: 20}, 20)
const projectile2 = new Projectile({x: 10, y: 10, z: 0}, 20)
const projectile3 = new Projectile({x: 10, y: 10, z: 0}, 20)

const collision1 = collisionDetection.collisionDetection(player1, projectile2)
const collision2 = collisionDetection.collisionDetection(player1, projectile3)

console.log("Collision detected:", collision1)
console.log("Collision detected:", collision2)

console.log("Projectile 1:", projectile1.currentPosition)
console.log("Projectile 2:", projectile2.currentPosition)