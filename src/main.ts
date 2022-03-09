import Game from "./game"
import Player from "./player"
import Playingfield from "./playingfield"
import Server from "./server"

const server1 = new Server();

const amountPlayers = 10;
const generatedPlayers: Player[] = []
const maxRounds = 5;

for (let i = 0; i < amountPlayers; i++) {
  generatedPlayers.push(new Player({x: 10, y: 10, z: 0}, i))
}

const playingfield = new Playingfield({start: 0, end: 1024})

const game1 = new Game([...generatedPlayers], playingfield, maxRounds)
server1.attachGame(game1)
console.info(server1);

server1.game?.startGame()
