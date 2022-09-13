export type TItem = {
  name: string;
  cost: number;
};

export type TRow = TItem & {
  type: "red" | "green" | "blue" | null;
};

export type TItems = Record<string, TRow>;
