import { v4 as uuid } from "uuid";
import { Action, createReducer } from "@reduxjs/toolkit";

import distributeItems from "./distributeItems";
import initialState from "../initialState";
import { APPEND, DELETE, DISTRIBUTE } from "../actionTypes";
import { TPayload, TState, TTable } from "../types";

function clearDistribution(table: TTable): TTable {
  return Object.fromEntries(
    Object.entries(table).map(([id, val]) => [id, { ...val, type: null }])
  );
}

const reducer = createReducer<TState>(initialState, (builder) => {
  builder
    .addCase(APPEND, (state: TState, { item }: TPayload & Action<"APPEND">) => {
      state.table = clearDistribution(state.table);
      state.table[uuid()] = { ...item, type: null };
    })
    .addCase(DELETE, (state, { id }: TPayload & Action<"DELETE">) => {
      state.table = clearDistribution(state.table);
      delete state.table[id];
    })
    .addCase(DISTRIBUTE, (state: TState) => {
      state.table = clearDistribution(state.table);
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
