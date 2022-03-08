type Vec2d = {
  x: number
  y: number
}

export default class Player {
  private position: Vec2d
  private health: number = 100

  constructor(position: Vec2d) {
    this.position = position
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

  set currentHealth(hp: number) {
    this.health = hp
  }

  setDamage(damage: number) {
    this.health -= damage
  }
}