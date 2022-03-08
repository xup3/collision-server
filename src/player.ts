type Vec2d = {
  x: number
  y: number
}

export default class Player {
  private position: Vec2d
  private health: number = 100
  public id: number;

  constructor(position: Vec2d, id: number) {
    this.position = position
    this.id = id
  }

  get currentPosition(): Vec2d {
    return this.position
  }

  set currentPosition(position: Vec2d) {
    this.position = position
  }

  get currentHealth(): number {
    return this.health
  }

  get playerId(): number {
    return this.id
  }

  set currentHealth(hp: number) {
    this.health = hp
  }

  setDamage(damage: number) {
    this.health -= damage
  }
}