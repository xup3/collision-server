import Playingfield from "./playingfield"

type Player = {
  id: number
}

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