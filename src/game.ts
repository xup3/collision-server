import { v4 as uuidv4 } from "uuid";
import Player from "./player";
import Playingfield from "./playingfield";
import { getRandomInt } from "./helper";

export default class Game {
  private players: Player[];
  private playingfield: Playingfield;
  running = false;
  paused = false;
  uuid = uuidv4();
  private roundcounter = 0;
  gamerounds: number;
  fps?: number;
  times: number[] = [];

  constructor(
    players: Player[],
    playingfield: Playingfield,
    gamerounds: number
  ) {
    this.players = players;
    this.playingfield = playingfield;
    this.gamerounds = gamerounds;
  }

  private loop() {
    console.info("GAME STARTED");

    while (this.running && this.gamerounds > 0) {
      console.log("FPS", this.fps);
      this.roundcounter += 1;
      console.info(`ROUND ${this.roundcounter} STARTED`);
      this.gamerounds -= 1;

      this.allPlayers.map((p) => {
        if (!p.isDead) {
          const randDamage = getRandomInt(0, 100);
          if (p.currentHealth - randDamage <= 0) {
            p.currentHealth = 0;
          } else {
            p.setDamage(Math.round(randDamage * 0.2));
          }

          p.isDead && console.info(`PLAYER ${p.playerId} JUST DIED THIS ROUND`);
        }
      });

      if (this.allPlayers.every((p) => p.isDead)) {
        this.stopGame();
        console.info("ALL PLAYER DIED, GAME STOPPED");
        console.info("ROUNDS PLAYED", this.roundcounter);
      }

      console.table(this.allPlayers);
    }
  }

  public startGame(): void {
    this.running = true;
    this.loop();
  }

  public stopGame(): void {
    this.running = false;
  }

  public pauseGame(): void {
    this.running = !this.running;
    this.paused = !this.running;

    console.info(this.running);
    console.info(this.paused);
  }

  get remainingGamerounds(): number {
    return this.gamerounds;
  }

  get allPlayers(): Player[] {
    return this.players;
  }

  get getArea(): Playingfield {
    return this.playingfield;
  }
}
