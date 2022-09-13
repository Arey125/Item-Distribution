import { createSlice } from "@reduxjs/toolkit";
import {
  add as addAction,
  remove as removeAction,
  distribute as distributeAction,
} from "features/items";
// eslint-disable-next-line import/no-internal-modules
import { TItems } from "shared/slices/items";

export const slice = createSlice({
  name: "table",
  initialState: {} as TItems,
  reducers: {
    add: addAction,
    remove: removeAction,
    distribute: distributeAction,
  },
});

const { actions, reducer } = slice;

export const { add, remove, distribute } = actions;
export { reducer };
