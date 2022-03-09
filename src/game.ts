import Player from "./player"
import Playingfield from "./playingfield"

export default class Game {
  private players: Player[]
  private playingfield: Playingfield

  constructor(players: Player[], playingfield: Playingfield) {
    this.players = players
    this.playingfield = playingfield
  }

  get allPlayers(): Player[] {
    return this.players
  }

  get getArea(): Playingfield {
    return this.playingfield
  }
}