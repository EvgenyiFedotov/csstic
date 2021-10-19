export const getDocumentElement = (): Document => {
  try {
    return document;
  } catch {
    return {
      head: {
        appendChild: (node) => node,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      querySelector: (selectors) => null,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      createElement: <K extends keyof HTMLElementTagNameMap>(tagName: K) =>
        ({
          dataset: {},
        } as HTMLElementTagNameMap[K]),
    } as Document;
  }
};
