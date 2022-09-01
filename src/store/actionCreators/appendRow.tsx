import { APPEND } from "../actionTypes";
import { Item } from "../types";

export function appendRow(item: Item) {
  return {
    type: APPEND,
    item,
  };
}
