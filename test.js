const Rectangle = require("./rectangle")

const example = new Rectangle(3, 4)

test(`the height of the rectangle is ${example.height} and the width is ${example.width}`, () => {
    expect(example).toEqual({ height: 3, width: 4 });
})

test(`the area of a rectangle that is ${example.width} by ${example.height} = 12`, () => {
    expect(example.area).toBe(12);
})

test(`the diagnal of a rectangle that is ${example.width} by ${example.height} = 5`, () => {
    expect(example.diagonal).toBe(5);
})

test(`the perimeter of a rectangle that is ${example.width} by ${example.height} = 14`, () => {
    expect(example.perimeter).toBe(14);
})