import { APPEND } from "../actionTypes";
import { TItem } from "../types";

export function appendRow(item: TItem) {
  return {
    type: APPEND,
    item,
  };
}
