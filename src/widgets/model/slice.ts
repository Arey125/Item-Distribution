import { createSlice } from "@reduxjs/toolkit";
import { add as addAction, remove as removeAction } from "features/items";
// eslint-disable-next-line import/no-internal-modules
import { TItems } from "shared/slices/items";

export const slice = createSlice({
  name: "table",
  initialState: {} as TItems,
  reducers: {
    add: addAction,
    remove: removeAction,
  },
});

const { actions, reducer } = slice;

export const { add, remove } = actions;
export { reducer };
