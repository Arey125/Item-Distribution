type TItem = {
  name: string;
  cost: number;
};

type TRow = TItem & {
  type: string | null;
};

type TTable = {
  [id: string]: TRow;
};

type TState = {
  table: TTable;
};

type TAppend = {
  type: "APPEND";
  item: TItem;
};
type TDelete = {
  type: "DELETE";
  id: string;
};
type TDistribute = {
  type: "DISTRIBUTE";
};

type TPayload = TAppend | TDelete | TDistribute;

export type { TRow, TItem, TTable, TState, TPayload };
