import { v4 as uuid } from "uuid";
import { createReducer } from "@reduxjs/toolkit";

import { distributeItems } from "./distributeItems";
import initialState from "../initialState";
import { TState, TTable } from "../types";
import { appendRow, deleteRow, distribute } from "../actionCreators";

function clearDistribution(table: TTable): void {
  Object.values(table).forEach((value) => {
    // eslint-disable-next-line no-param-reassign
    value.type = null;
  });
}

const reducer = createReducer<TState>(initialState, (builder) => {
  builder
    .addCase(appendRow, (state: TState, { payload: { item } }) => {
      clearDistribution(state.table);
      state.table[uuid()] = { ...item, type: null };
    })
    .addCase(deleteRow, (state, { payload: { id } }) => {
      clearDistribution(state.table);
      delete state.table[id];
    })
    .addCase(distribute, (state: TState) => {
      clearDistribution(state.table);
      const entries = Object.entries(state.table);
      const values = entries.map(([, { cost }]) => cost);
      const [, indices] = distributeItems(values);
      const types = ["red", "green", "blue"];
      const entriesWithDistribution = entries.map(([id, val], ind) => [
        id,
        { ...val, type: types[indices[ind]] },
      ]);
      state.table = Object.fromEntries(entriesWithDistribution) as TTable;
    });
});

export default reducer;
