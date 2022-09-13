// eslint-disable-next-line import/no-internal-modules
import { TItem } from "../../form/model";

export type TRow = TItem & {
  type: "red" | "green" | "blue" | null;
};
