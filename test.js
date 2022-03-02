const Rectangle = require("./rectangle")

const example = new Rectangle(3, 4)

test(`the area of a rectangle that is ${example.width} by ${example.height}`, () => {
    expect(example.area).toBe(12);
})

test(`the diagnal of a rectangle that is ${example.width} by ${example.height}`, () => {
    expect(example.diagonal).toBe(5);
})

test(`the perimeter of a rectangle that is ${example.width} by ${example.height}`, () => {
    expect(example.perimeter).toBe(14);
})