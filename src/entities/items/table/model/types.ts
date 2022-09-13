// eslint-disable-next-line import/no-internal-modules
import { TItem } from "entities/items";

export type TRow = TItem & {
  type: "red" | "green" | "blue" | null;
};
