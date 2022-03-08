describe("Player Test Suite", () => {
  type Coords = {
    x: number,
    y: number
  }

  test("Will detect a collision of two objects", () => {
    const coords1: Coords = {x: 1, y: 200}
    const coords2: Coords = {x: 1, y: 200}

    expect(coords1).toEqual(coords2)
  })

  test("The coordinations will not collide", () => {
    const coords1: Coords = {x: 1, y: 300}
    const coords2: Coords = {x: 1, y: 200}

    expect(coords1).not.toEqual(coords2)
  })
})