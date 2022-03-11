import Projectile from "./projectile"

type Vec3d = {
  x: number,
  y: number,
  z: number
}
class Weapon {
  name: string
  baseDamage: number
  range: number
  ammo: number
  position: Vec3d

  constructor(name: string, baseDamage: number, range: number, ammo: number, position: Vec3d) {
    this.name = name
    this.baseDamage = baseDamage
    this.range = range
    this.ammo = ammo
    this.position = position
  }

  fire(): Projectile {
    return new Projectile(this.position, this.baseDamage, 20)
  }
}

export default Weapon