import objectHash from "object-hash";
import { createGetCssContent } from "./create-get-css-content";
import { generateClassName } from "./generate-class-name";
import { ClassName, CssArg, CssContent, HashCssContent, State } from "./types";

export const createUseClassName = (payload: {
  state: State;
  template: TemplateStringsArray;
  cssArgs: CssArg[];
}) => {
  const { state, template, cssArgs } = payload;
  const getCssContent = createGetCssContent(state);

  return (): ClassName => {
    const cssContent: CssContent = getCssContent(template, cssArgs);
    const hashCssContent: HashCssContent = objectHash(cssContent);
    const className: ClassName = state.classNames[hashCssContent];

    if (className) {
      return className;
    } else {
      return attachClassName({ state, cssContent, hashCssContent });
    }
  };
};

const attachClassName = (payload: {
  state: State;
  cssContent: CssContent;
  hashCssContent: HashCssContent;
}): ClassName => {
  const { state, cssContent, hashCssContent } = payload;
  const className: ClassName = generateClassName({
    prefix: state.prefix,
    hashLength: state.hashLength,
    maxSalt: state.maxSalt,
    prevClassNames: Object.values(state.classNames),
  });

  state.cssContents[className] = cssContent;
  state.classNames[hashCssContent] = className;

  return className;
};
