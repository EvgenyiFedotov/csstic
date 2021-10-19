export type CssArg = string | number | Snapshot;
export type Prefix = string;
export type HashLength = number;
export type NamespaceSelector = string;
export type ClassName = string;
export type CssContent = string;
export type HashCssContent = string;
export type MaxSalt = number;

export type State = {
  prefix: Prefix;
  hashLength: HashLength;
  maxSalt: MaxSalt;
  styleElement: HTMLElement;
  cssContents: Record<ClassName, CssContent>;
  classNames: Record<HashCssContent, ClassName>;
};

export type Snapshot = {
  get className(): ClassName;
};

export type Css = {
  (template: TemplateStringsArray, ...args: CssArg[]): Snapshot;
};
