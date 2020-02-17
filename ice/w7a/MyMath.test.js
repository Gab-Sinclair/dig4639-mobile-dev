import { Sum, AddList } from './MyMath.js'


//test moe than one with describe
describe("sum", () => {
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, "test")).toBeUndefined()
})
test('whether one is undefined  on invalid type', () => {
  expect(Sum(1, 2)).toBe(3)
})

it('produces the sum of 10 +20 which should be 30', () => {
  expect(Sum(10, 20)).toBe(30)
})
})




describe("AddList", () => {

  test('adds a list of numbers together', () => {
    let input = [1,2,3,4,3];
    let result = 13;
    expect(AddList(input)).toBe(result);
  })
  test('Tests if an array returns undefined', () => {
    let input = [];
    expect(AddList(input)).toBeUndefined();
})
test('Tests if an undefined elem returns undefined', () => {
  let input = [undefined, 0,2,3];
  expect(AddList(input)).toBeUndefined();
})
test('Tests if a non array returns undefined', () => {
  let input = 100;
  expect(AddList(input)).toBeUndefined();
})

})
// ICE 








// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
