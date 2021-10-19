import { generateClassName } from "../generate-class-name";

describe("generateClassName", () => {
  test("typeof", () => {
    expect(typeof generateClassName()).toBe("string");
  });

  test.todo("with prefix");

  test.todo("with hashLength");

  test.todo("with maxSalt");

  test.todo("with prevClassNames");
});
