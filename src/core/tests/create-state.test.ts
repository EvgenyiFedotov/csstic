import { createState } from "../create-state";
import * as constants from "../constants";

describe("createState", () => {
  test("result", () => {
    const state = createState();

    expect(state.prefix).toBe(constants.prefix);
    expect(state.hashLength).toBe(constants.hashLength);
    expect(typeof state.styleElement).toBe("object");
    expect(typeof state.cssContents).toBe("object");
    expect(typeof state.classNames).toBe("object");
  });

  test.todo("setup prefix");

  test.todo("setup hashLength");

  test.todo("after ssr");
});
