type Vec2d = {
  x: number
  y: number
}
export default class Collision {
  public coords: Vec2d

  constructor(coords: Vec2d) {
    this.coords = coords
  }

  get pos(): Vec2d {
    return this.coords
  }

  set pos(coords: Vec2d) {
    this.coords = coords
  }
}
