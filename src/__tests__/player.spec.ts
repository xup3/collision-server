import Player from "../player";
import { getRandomInt } from "../helper";

describe("Player Test Suite", () => {
  type Coords = {
    x: number;
    y: number;
    z: number;
  };

  let testPlayer: Player;

  beforeEach(() => {
    testPlayer = new Player({ x: 0, y: 0, z: 0 }, 1);
  });

  test("Player position to be at 0, 0, 0", () => {
    const playerCoords: Coords = { x: 0, y: 0, z: 0 };
    expect(testPlayer.currentPosition).toEqual(playerCoords);
  });

  test("Player health is at 100 when spawning", () => {
    expect(testPlayer.currentHealth).toEqual(100);
  });

  test("Player health is at 80 when taking 20 damage", () => {
    testPlayer.setDamage(20);
    expect(testPlayer.currentHealth).toEqual(80);
  });

  test("Player health is at ? when taking random damage", () => {
    const randDamage = getRandomInt(0, 100);

    testPlayer.setDamage(randDamage);
    expect(testPlayer.currentHealth).toEqual(100 - randDamage);
  });

  test("does nothing, does it?", () => {
    expect("hello world").toEqual("hello world");
  });
});
