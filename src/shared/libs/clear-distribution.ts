import { TItems } from "shared/slices/items";

export const clearDistribution = (table: TItems) => {
  Object.values(table).forEach((value) => {
    // eslint-disable-next-line no-param-reassign
    value.type = null;
  });
};
