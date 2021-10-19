import { isSnapshot } from "../is-snapshot";

describe("isSnapshot", () => {
  test("correct", () => {
    expect(isSnapshot({ className: "" })).toBe(true);
  });

  test("incorrect", () => {
    expect(isSnapshot({})).toBe(false);
  });
});
