import sum from "./toBe"

test('The sum function should add two nums', () => {
    expect(sum(2, 4)).toBe(6)
    expect(sum(2, 4)).not.toBe(7)

})