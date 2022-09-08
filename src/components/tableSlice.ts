import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import type { TTable, TAppend, TDelete, TState } from "../store";

// eslint-disable-next-line import/no-internal-modules
import { distributeItems } from "../store/reducers/distributeItems";

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
  initialState: { table: {} },
  reducers: {
    appendRow(state: TState, { payload: { item } }: PayloadType<TAppend>) {
      clearDistribution(state.table);
      state.table[uuid()] = { ...item, type: null };
    },
    deleteRow(state: TState, { payload: { id } }: PayloadType<TDelete>) {
      clearDistribution(state.table);
      delete state.table[id];
    },
    distribute(state: TState) {
      clearDistribution(state.table);
      const entries = Object.entries(state.table);
      const values = entries.map(([, { cost }]) => cost);
      const [, indices] = distributeItems(values);
      const types = ["red", "green", "blue"];
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

export const idSelector = (state: TState) => Object.keys(state.table);
