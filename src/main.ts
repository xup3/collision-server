import Collision from "./collision"
import Game from "./game"
import Player from "./player"
import Playingfield from "./playingfield"
import Projectile from "./projectile"
import Server from "./server"

const server1 = new Server();
console.info(server1);

const player1 = new Player({x: 10, y: 10, z: 0}, 1)
const player2 = new Player({x: 20, y: 20, z: 0}, 2)
const player3 = new Player({x: 30, y: 30, z: 0}, 3)
const player4 = new Player({x: 30, y: 30, z: 0}, 4)
const player5 = new Player({x: 30, y: 30, z: 0}, 5)
const player6 = new Player({x: 30, y: 30, z: 0}, 6)

const playingfield = new Playingfield({start: 0, end: 1024})

const game1 = new Game([player1, player2, player3, player4, player5, player6], playingfield)
server1.attachGame(game1)

console.info(server1.game);

server1.game?.startGame();

const collisionDetection = new Collision;

const projectile1 = new Projectile({x: 200, y: 100, z: 20}, 20)
const projectile2 = new Projectile({x: 10, y: 10, z: 0}, 20)
const projectile3 = new Projectile({x: 10, y: 10, z: 0}, 20)

const collision1 = collisionDetection.collisionDetection(player1, projectile2)
const collision2 = collisionDetection.collisionDetection(player1, projectile3)

console.info("Collision detected:", collision1)
console.info("Collision detected:", collision2)

console.info("Projectile 1:", projectile1.currentPosition)
console.info("Projectile 2:", projectile2.currentPosition)