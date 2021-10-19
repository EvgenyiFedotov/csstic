import objectHash from "object-hash";
import { randomInt } from "./random-int";
import { ClassName, HashLength, MaxSalt, Prefix } from "./types";
import * as constants from "./constants";

type GenerateClassNameConfig = {
  prefix?: Prefix;
  hashLength?: HashLength;
  maxSalt?: MaxSalt;
  prevClassNames?: ClassName[];
};

export const generateClassName = (
  config: GenerateClassNameConfig = {}
): ClassName => {
  const {
    prefix = "",
    hashLength = constants.hashLength,
    maxSalt = constants.maxSalt,
    prevClassNames = [],
  } = config;
  const now = new Date().getTime();
  const salt = randomInt(maxSalt);
  const className: ClassName = `${prefix}${objectHash({ now, salt }).substr(
    0,
    hashLength
  )}`;

  if (prevClassNames.includes(className)) {
    return generateClassName({ prefix, hashLength, maxSalt, prevClassNames });
  } else {
    return className;
  }
};
