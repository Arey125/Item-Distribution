import { v4 as uuid } from "uuid";

// eslint-disable-next-line import/no-internal-modules
import { TItem, TItems } from "shared/slices/items";
import { clearDistribution } from "shared/libs";

type Payload = {
  payload: {
    item: TItem;
  };
};

export const add = {
  reducer: (table: TItems, { payload: { item } }: Payload) => {
    clearDistribution(table);
    // eslint-disable-next-line no-param-reassign
    table[uuid()] = { ...item, type: null };
  },
  prepare: (item: TItem) => ({
    payload: { item },
  }),
};
