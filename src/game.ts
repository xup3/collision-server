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
  private roundcounter: number = 0
  gamerounds: number

  constructor(players: Player[], playingfield: Playingfield, gamerounds: number) {
    this.players = players
    this.playingfield = playingfield
    this.gamerounds = gamerounds
  }

  loop() {
    console.info("GAME STARTED");

    while(this.running && this.gamerounds > 0) {
      this.roundcounter++
      console.info(`ROUND ${this.roundcounter} STARTED`);
      this.gamerounds--

      this.allPlayers.map((p) => {
        if (!p.isDead) {
          const randDamage = getRandomInt(0, 100)
          if (p.currentHealth - randDamage <= 0) {
            p.currentHealth = 0;
          } else {
            p.setDamage(randDamage)
          }

          p.isDead && console.info(`PLAYER ${p.playerId} JUST DIED THIS ROUND`)
        }
      })

      if (this.allPlayers.every(p => p.isDead)) {
        this.stopGame()
        console.info("ALL PLAYER DIED, GAME STOPPED")
        console.info(`ROUNDS PLAYED`, this.roundcounter)
      }

      console.table(this.allPlayers);
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

  get remainingGamerounds(): number {
    return this.gamerounds
  }

  get allPlayers(): Player[] {
    return this.players
  }

  get getArea(): Playingfield {
    return this.playingfield
  }
}