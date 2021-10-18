export const getDocumentElement = (): Document => {
  try {
    return document;
  } catch {
    return {
      head: {
        appendChild: (node) => node,
      },
    } as Document;
  }
};
