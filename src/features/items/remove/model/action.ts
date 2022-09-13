// eslint-disable-next-line import/no-internal-modules
import { clearDistribution } from "shared/libs";
// eslint-disable-next-line import/no-internal-modules
import { TItems } from "shared/slices/items";

type Payload = {
  payload: {
    id: string;
  };
};

export const remove = {
  reducer: (table: TItems, { payload: { id } }: Payload) => {
    clearDistribution(table);
    // eslint-disable-next-line no-param-reassign
    delete table[id];
  },
  prepare: (id: string) => ({ payload: { id } }),
};
