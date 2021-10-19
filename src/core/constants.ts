import { HashLength, MaxSalt, NamespaceSelector, Prefix } from "./types";

export const libName = "csstic";
export const prefix: Prefix = "c";
export const nsSelector: NamespaceSelector = "[namespace]";
export const nsSelectorS: NamespaceSelector = nsSelector
  .replace(/\[/g, "\\[")
  .replace(/\]/g, "\\]");
export const hashLength: HashLength = 4;
export const maxSalt: MaxSalt = 1000;
