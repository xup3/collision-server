import Game from "./game"
import Player from "./player"
import Playingfield from "./playingfield"
import Server from "./server"
import Weapon from "./weapon";

const server1 = new Server();

const amountPlayers = 20;
const generatedPlayers: Player[] = []
const maxRounds = 15;

for (let i = 0; i < amountPlayers; i++) {
  generatedPlayers.push(new Player({x: 10, y: 10, z: 0}, i))
}

const playingfield = new Playingfield({start: 0, end: 1024})

const game1 = new Game([...generatedPlayers], playingfield, maxRounds)
server1.attachGame(game1)
console.info(server1);

server1.game?.startGame()

const weapon1 = new Weapon("Pistol", 20, 200, 12, {x: 0, y: 0, z: 0})
server1.game?.allPlayers.at(0)?.attachWeapon(weapon1)
