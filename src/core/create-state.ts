import * as constants from "./constants";
import { getDocumentElement } from "./get-document-element";
import {
  ClassName,
  CssContent,
  HashCssContent,
  HashLength,
  MaxSalt,
  Prefix,
  State,
} from "./types";

export type CreateStateConfig = Partial<
  Pick<State, "prefix" | "hashLength" | "maxSalt">
>;

export const createState = (config: CreateStateConfig = {}): State => {
  const prefix: Prefix = config.prefix ?? constants.prefix;
  const hashLength: HashLength = config.hashLength ?? constants.hashLength;
  const maxSalt: MaxSalt = config.maxSalt ?? constants.maxSalt;
  const styleElement: HTMLStyleElement = getStyleElement(prefix);
  const cssContents: Record<ClassName, CssContent> = {};
  const classNames: Record<HashCssContent, ClassName> = {};

  if (!styleElement.parentElement) {
    getDocumentElement().head.appendChild(styleElement);
  }

  return { prefix, hashLength, styleElement, cssContents, classNames, maxSalt };
};

const getStyleElement = (prefix: Prefix): HTMLStyleElement => {
  return (
    getDocumentElement().querySelector(getSelectStyleElement(prefix)) ??
    createStyleElement(prefix)
  );
};

const getSelectStyleElement = (prefix: Prefix): string => {
  return `style[data-lib-name="${constants.libName}"][data-prefix="${prefix}"]`;
};

const createStyleElement = (prefix: Prefix): HTMLStyleElement => {
  const element: HTMLStyleElement = getDocumentElement().createElement("style");

  element.type = "text/css";
  element.dataset.libName = constants.libName;
  element.dataset.prefix = prefix;

  return element;
};
