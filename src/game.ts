import { v4 as uuidv4 } from 'uuid';
import Player from "./player"
import Playingfield from "./playingfield"

export default class Game {
  private players: Player[]
  private playingfield: Playingfield
  gamerunning: boolean = false
  gamepaused: boolean = false
  uuid = uuidv4();

  constructor(players: Player[], playingfield: Playingfield) {
    this.players = players
    this.playingfield = playingfield
  }

  async loop() {
    while(this.gamerunning) {
      console.log("GAME IS RUNNING");
    }
  }

  startGame(): void {
    this.gamerunning = true
    this.loop();
  }

  stopGame(): void {
    this.gamerunning = false;
  }

  pauseGame(): void {
    this.gamerunning = !this.gamerunning
    this.gamepaused = !this.gamerunning

    console.log(this.gamerunning);
    console.log(this.gamepaused);
  }

  get allPlayers(): Player[] {
    return this.players
  }

  get getArea(): Playingfield {
    return this.playingfield
  }
}