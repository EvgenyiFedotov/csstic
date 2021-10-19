import { randomInt } from "../random-int";

const expectRange = (value: number, max: number, min = 0): void => {
  expect(min <= value).toBe(true);
  expect(value <= max).toBe(true);
};

describe("randomInt", () => {
  test.todo("Add each");

  test("only max", () => {
    expectRange(randomInt(10), 10);
    expectRange(randomInt(10), 10);
    expectRange(randomInt(10), 10);
    expectRange(randomInt(10), 10);
    expectRange(randomInt(10), 10);
  });

  test("with min", () => {
    expectRange(randomInt(10, -10), 10, -10);
    expectRange(randomInt(10, -10), 10, -10);
    expectRange(randomInt(10, -10), 10, -10);
    expectRange(randomInt(10, -10), 10, -10);
    expectRange(randomInt(10, -10), 10, -10);
  });
});
