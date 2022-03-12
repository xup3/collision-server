type Vec3d = {
  x: number;
  y: number;
  z: number;
};

export default class Projectile {
  public position: Vec3d;
  public damage: number;
  public velocity: number;

  constructor(position: Vec3d, damage: number, velocity: number) {
    this.position = position;
    this.damage = damage;
    this.velocity = velocity;
  }

  get currentPosition(): Vec3d {
    return this.position;
  }

  set currentPosition(position: Vec3d) {
    this.position = position;
  }

  get vel(): number {
    return this.velocity;
  }

  set vel(val: number) {
    this.velocity = val;
  }

  public setDamage(damage: number) {
    this.damage -= damage;
  }

  public move(pos: Vec3d): void {
    this.currentPosition = pos;
  }
}
