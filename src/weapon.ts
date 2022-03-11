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
    const speed = 0.2

    return new Projectile(this.position, this.baseDamage, speed)
  }
}

export default Weapon