import { distributeItems, clearDistribution } from "shared/libs";
// eslint-disable-next-line import/no-internal-modules
import { TItems } from "shared/slices/items";

export const distribute = (table: TItems) => {
  clearDistribution(table);
  const entries = Object.entries(table);
  const values = entries.map(([, { cost }]) => cost);
  const [, indices] = distributeItems(values);
  const types = ["red", "green", "blue"] as const;
  entries.forEach(([, val], ind) => {
    // eslint-disable-next-line no-param-reassign
    val.type = types[indices[ind]];
  });
};
