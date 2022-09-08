import { createAction } from "@reduxjs/toolkit";
import { TItem } from "../types";

export const appendRow = createAction("APPEND", (item: TItem) => ({
  payload: {
    item,
  },
}));
