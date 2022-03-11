import Player from "./player"
import Projectile from "./projectile"

class Weapon {
  name: string
  baseDamage: number
  range: number
  ammo: number
  owner: Player

  constructor(name: string, baseDamage: number, range: number, ammo: number, owner: Player) {
    this.name = name
    this.baseDamage = baseDamage
    this.range = range
    this.ammo = ammo
    this.owner = owner
  }

  fire(): Projectile {
    return new Projectile(this.owner.currentPosition, this.baseDamage)
  }
}

export default Weapon