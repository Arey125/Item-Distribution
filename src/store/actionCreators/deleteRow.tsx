import { createAction } from "@reduxjs/toolkit";

export const deleteRow = createAction("DELETE", (id: string) => ({
  payload: {
    id,
  },
}));
