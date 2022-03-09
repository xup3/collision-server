type Vec3d = {
  x: number
  y: number,
  z: number
}

export default class Player {
  private position: Vec3d
  private health: number = 100
  public id: number;

  constructor(position: Vec3d, id: number) {
    this.position = position
    this.id = id
  }

  get currentPosition(): Vec3d {
    return this.position
  }

  set currentPosition(position: Vec3d) {
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

  hasTakenDamage(): boolean {
    return true
  }
}