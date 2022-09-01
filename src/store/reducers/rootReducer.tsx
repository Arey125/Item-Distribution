import { Reducer } from "redux";
import { v4 as uuid } from "uuid";

import distributeItems from "./distributeItems";
import initialState from "../initialState";
import { APPEND, DELETE, DISTRIBUTE } from "../actionTypes";
import { Payload, State, Table } from "../types";

function clearDistribution(table: Table): Table {
  return Object.fromEntries(
    Object.entries(table).map(([id, val]) => [id, { ...val, type: null }])
  );
}

const reducer: Reducer<State, Payload> = (state: State | undefined, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  let { table } = state;
  table = clearDistribution(table);
  switch (action.type) {
    case APPEND:
      return { table: { ...table, [uuid()]: { ...action.item, type: null } } };

    case DELETE: {
      const { id } = action;
      const { [id]: val, ...newTable } = table;
      return { table: newTable };
    }

    case DISTRIBUTE: {
      const entries = Object.entries(table);
      const values = entries.map(([, { cost }]) => cost);
      const [, indices] = distributeItems(values);
      const types = ["red", "green", "blue"];
      const entriesWithDistribution = entries.map(([id, val], ind) => [
        id,
        { ...val, type: types[indices[ind]] },
      ]);
      return { table: Object.fromEntries(entriesWithDistribution) as Table };
    }

    default:
      return { table };
  }
};

export default reducer;
