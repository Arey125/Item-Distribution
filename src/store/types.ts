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

export type TAppend = {
  item: TItem;
};
export type TDelete = {
  id: string;
};
export type TDistribute = Record<string, never>;

type TPayload = TAppend | TDelete | TDistribute;

export type { TRow, TItem, TTable, TState, TPayload };
