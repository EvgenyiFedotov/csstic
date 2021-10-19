import { createCss } from "../create-css";

describe("createCss", () => {
  test("css", () => {
    expect(createCss()).toBeInstanceOf(Function);
  });

  test("result of css", () => {
    const css = createCss();
    const sn = css``;

    expect(typeof sn).toBe("object");
    expect(typeof sn.className).toBe("string");
  });

  test.todo("get className");
});
