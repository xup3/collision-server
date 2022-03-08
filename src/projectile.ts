type Vec2d = {
  x: number
  y: number
}

export default class Projectile {
  public position: Vec2d
  public damage: number

  constructor(position: Vec2d, damage: number) {
    this.position = position
    this.damage = damage
  }

  get currentPosition(): Vec2d {
    return this.position
  }

  set currentPosition(position: Vec2d) {
    this.position = position
  }

  setDamage(damage: number) {
    this.damage -= damage
  }
}