type Vec3d = {
  x: number
  y: number
  z: number
}

export default class Projectile {
  public position: Vec3d
  public damage: number

  constructor(position: Vec3d, damage: number) {
    this.position = position
    this.damage = damage
  }

  get currentPosition(): Vec3d {
    return this.position
  }

  set currentPosition(position: Vec3d) {
    this.position = position
  }

  setDamage(damage: number) {
    this.damage -= damage
  }
}