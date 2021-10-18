import { LengthClassNameHash } from "./types";

export const libName = "csstic";
export const nsSelector = "[namespace]";
export const nsSelectorS: string = nsSelector
  .replace(/\[/g, "\\[")
  .replace(/\]/g, "\\]");
export const lengthClassNameHash: LengthClassNameHash = 4;
