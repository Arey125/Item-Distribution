// eslint-disable-next-line import/no-internal-modules
import { TRootState } from "../../../../app/store";

export const IdSelector = (state: TRootState) => Object.keys(state.items);

export const RowSelector = (id: string) => (state: TRootState) =>
  state.items[id];
