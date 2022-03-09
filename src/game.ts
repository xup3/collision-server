import { v4 as uuidv4 } from 'uuid';
import Player from "./player"
import Playingfield from "./playingfield"
import { getRandomInt } from './helper';

export default class Game {
  private players: Player[]
  private playingfield: Playingfield
  running: boolean = false
  paused: boolean = false
  uuid = uuidv4();
  private roundCounter: number = 1

  constructor(players: Player[], playingfield: Playingfield) {
    this.players = players
    this.playingfield = playingfield
  }

  loop() {
    console.info("GAME STARTED");

    while(this.running) {
      console.info(`ROUND ${this.roundCounter} STARTED`);
      this.roundCounter++

      this.allPlayers.map(p => {
        p.isDead && console.info(`PLAYER ${p.playerId} IS DEAD`)
      })

      this.allPlayers.map(function(p) {
        if (p.currentHealth > 0) {
          const randDamage = getRandomInt(0, 100);
          console.log(randDamage);

          p.setDamage(randDamage)

          console.info("Player:", p.playerId, "Health: ", p.currentHealth);
        }
      })

      if (this.allPlayers.every(p => p.currentHealth === 0)) {
        this.stopGame()
        console.info("ALL PLAYER DIED, GAME STOPPED")
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

    console.info(this.running);
    console.info(this.paused);
  }

  get allPlayers(): Player[] {
    return this.players
  }

  get getArea(): Playingfield {
    return this.playingfield
  }
}