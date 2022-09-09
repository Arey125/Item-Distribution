import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import type { TTable, TAppend, TDelete, TItem, TRootState } from "../store";

import { distributeItems } from "./helpers";

function clearDistribution(table: TTable): void {
  Object.values(table).forEach((value) => {
    // eslint-disable-next-line no-param-reassign
    value.type = null;
  });
}

type PayloadType<T> = {
  payload: T;
};

const tableSlice = createSlice({
  name: "table",
  initialState: {} as TTable,
  reducers: {
    appendRow: {
      reducer: (table: TTable, { payload: { item } }: PayloadType<TAppend>) => {
        clearDistribution(table);
        // eslint-disable-next-line no-param-reassign
        table[uuid()] = { ...item, type: null };
      },
      prepare: (item: TItem) => ({
        payload: { item },
      }),
    },
    deleteRow: {
      reducer: (table: TTable, { payload: { id } }: PayloadType<TDelete>) => {
        clearDistribution(table);
        // eslint-disable-next-line no-param-reassign
        delete table[id];
      },
      prepare: (id: string) => ({ payload: { id } }),
    },
    distribute: (table: TTable) => {
      clearDistribution(table);
      const entries = Object.entries(table);
      const values = entries.map(([, { cost }]) => cost);
      const [, indices] = distributeItems(values);
      const types = ["red", "green", "blue"] as const;
      entries.forEach(([, val], ind) => {
        // eslint-disable-next-line no-param-reassign
        val.type = types[indices[ind]];
      });
    },
  },
});

const { actions, reducer } = tableSlice;

export const { appendRow, deleteRow, distribute } = actions;
export { reducer as tableReducer };

export const idSelector = (state: TRootState) => Object.keys(state.table);
