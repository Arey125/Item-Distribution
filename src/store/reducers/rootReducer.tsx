import { v4 as uuid } from "uuid";
import { Action, createReducer } from "@reduxjs/toolkit";

import distributeItems from "./distributeItems";
import initialState from "../initialState";
import { APPEND, DELETE, DISTRIBUTE } from "../actionTypes";
import { Payload, State, Table } from "../types";

function clearDistribution(table: Table): Table {
  return Object.fromEntries(
    Object.entries(table).map(([id, val]) => [id, { ...val, type: null }])
  );
}

const reducer = createReducer<State>(initialState, (builder) => {
  builder
    .addCase(APPEND, (state: State, { item }: Payload & Action<"APPEND">) => {
      state.table = clearDistribution(state.table);
      state.table[uuid()] = { ...item, type: null };
    })
    .addCase(DELETE, (state, { id }: Payload & Action<"DELETE">) => {
      state.table = clearDistribution(state.table);
      delete state.table[id];
    })
    .addCase(DISTRIBUTE, (state: State) => {
      state.table = clearDistribution(state.table);
      const entries = Object.entries(state.table);
      const values = entries.map(([, { cost }]) => cost);
      const [, indices] = distributeItems(values);
      const types = ["red", "green", "blue"];
      const entriesWithDistribution = entries.map(([id, val], ind) => [
        id,
        { ...val, type: types[indices[ind]] },
      ]);
      state.table = Object.fromEntries(entriesWithDistribution) as Table;
    });
});

export default reducer;
