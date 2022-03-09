import { v4 as uuidv4 } from 'uuid';
import Player from "./player"
import Playingfield from "./playingfield"

export default class Game {
  private players: Player[]
  private playingfield: Playingfield
  running: boolean = false
  paused: boolean = false
  uuid = uuidv4();

  constructor(players: Player[], playingfield: Playingfield) {
    this.players = players
    this.playingfield = playingfield
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  loop() {
    while(this.running) {
      console.log("GAME IS RUNNING");

      this.allPlayers.map(p => {
        if (p.currentHealth > 0) {
          const dmg = this.getRandomInt(0, 100)
          p.setDamage(dmg)
          console.log(p.playerId, p.currentHealth);
        }
      })

      if (this.allPlayers.every(p => p.currentHealth === 0)) {
        this.stopGame()
      }
    }
  }

  startGame(): void {
    this.running = true
    this.loop();
  }

  stopGame(): void {
    this.running = false;
  }

  pauseGame(): void {
    this.running = !this.running
    this.paused = !this.running

    console.log(this.running);
    console.log(this.paused);
  }

  get allPlayers(): Player[] {
    return this.players
  }

  get getArea(): Playingfield {
    return this.playingfield
  }
}