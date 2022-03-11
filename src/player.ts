import Weapon from "./weapon"

type Vec3d = {
  x: number
  y: number,
  z: number
}

export default class Player {
  private position: Vec3d
  private health: number = 100
  private id: number
  private ready: boolean
  public dead: boolean = false
  weapon?: Weapon

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

  get isDead(): boolean {
    if (this.currentHealth <= 0) {
      this.dead = true

      return true
    }

    return false
  }

  set currentHealth(newhealth: number) {
    this.health = newhealth
  }

  public setDamage(damage: number) {
    this.health -= damage
  }

  public hasTakenDamage(): boolean {
    return true
  }

  attachWeapon(weapon: Weapon): void {
    this.weapon = weapon
    console.info("WEAPON ATTACHED TO PLAYER")
  }
}