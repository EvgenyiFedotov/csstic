import { compile, serialize, stringify } from "stylis";
import { nsSelector, nsSelectorS } from "./constants";
import { isSnapshot } from "./is-snapshot";
import { CssArg, CssContent, State } from "./types";

export const createGetCssContent = (state: State) => {
  return (template: TemplateStringsArray, cssArgs: CssArg[]): CssContent => {
    let result = "";

    for (let index = 0; index < template.length; index += 1) {
      const chunk = template[index];
      const arg = cssArgs[index];

      result += chunk;

      if (typeof arg === "string") {
        result += arg;
      } else if (typeof arg === "number") {
        result += arg.toString();
      } else if (isSnapshot(arg)) {
        const cssContent: CssContent =
          state.cssContents.byClassName[arg.className];

        result += cssContent.replace(new RegExp(nsSelectorS, "g"), `&`);
      }
    }

    return serialize(compile(`${nsSelector}{${result}}`), stringify);
  };
};
