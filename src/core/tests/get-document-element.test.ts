import { getDocumentElement } from "../get-document-element";

describe("getDocumentHead", () => {
  test("appendChild", () => {
    expect(typeof getDocumentElement().head).toBe("object");
  });
});
