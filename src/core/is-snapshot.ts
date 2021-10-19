import { Snapshot } from "./types";

export const isSnapshot = (value: unknown): value is Snapshot => {
  if (value && typeof value === "object") {
    const snapshot: Snapshot = value as Snapshot;

    return "className" in snapshot;
  } else {
    return false;
  }
};
