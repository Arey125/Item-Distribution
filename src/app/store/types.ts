export type TItem = {
  name: string;
  cost: number;
};

export type TRow = TItem & {
  type: "red" | "green" | "blue" | null;
};

export type TTable = Record<string, TRow>;

export type TAppend = {
  item: TItem;
};

export type TDelete = {
  id: string;
};

export type TDistribute = Record<string, never>;

export type TPayload = TAppend | TDelete | TDistribute;
