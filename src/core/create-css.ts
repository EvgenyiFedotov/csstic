import { createState, CreateStateConfig } from "./create-state";
import { createUseClassName } from "./create-use-class-name";
import { Css, Snapshot, State } from "./types";

export const createCss = (config: CreateStateConfig = {}): Css => {
  const state: State = createState(config);

  const css: Css = (template, ...cssArgs) => {
    const useClassName = createUseClassName({ state, template, cssArgs });

    const snapshot: Snapshot = {
      get className() {
        return useClassName();
      },
    };

    return snapshot;
  };

  return css;
};
