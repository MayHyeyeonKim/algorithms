import obj from "./toStrictEqual"

test("the obj function should return an obj", () => {
    expect(obj()).toStrictEqual({ a: 'hello' }) //obj끼리는 toStrickEqual
    expect(obj()).not.toStrictEqual({ a: '' })

})