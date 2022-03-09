type Vec3d = {
  x: number
  y: number,
  z: number
}

export default class Player {
  private position: Vec3d
  private health: number = 100
  public id: number
  private ready: boolean

  constructor(position: Vec3d, id: number, ready: boolean = false) {
    this.position = position
    this.id = id
    this.ready = ready
  }

  get isReady(): boolean {
    return this.ready
  }

  set isReady(state: boolean) {
    this.ready = state
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