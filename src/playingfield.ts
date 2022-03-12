type Vec2d = {
  start: number;
  end: number;
};
export default class Playingfield {
  private field: Vec2d;

  constructor(field: Vec2d) {
    this.field = field;
  }

  get dimension(): Vec2d {
    return this.field;
  }

  set dimension(field: Vec2d) {
    this.field = field;
  }
}
