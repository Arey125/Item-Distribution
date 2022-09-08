import { TableRow as MUITableRow, TableCell } from "@mui/material";

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { deleteRow } from "./tableSlice";
import type { TState } from "../store";

type TProps = {
  id: string;
};

type TBackgroundColor = {
  backgroundColor: string;
};

type TBackgroundColorDict = {
  [id: string]: TBackgroundColor;
};

const ROW_STYLE: TBackgroundColorDict = {
  red: { backgroundColor: "#fad2d2" },
  green: { backgroundColor: "#e3fbe3" },
  blue: { backgroundColor: "#e3f4fe" },
};

const TableRow = ({ id }: TProps) => {
  const dispatch = useAppDispatch();
  const { name, cost, type } = useAppSelector(
    (state: TState) => state.table[id]
  );
  const backgroundColor = type && ROW_STYLE[type];

  const deleteThisRow = useCallback(() => {
    dispatch(deleteRow({ id }));
  }, [id, dispatch]);

  return (
    <MUITableRow sx={{ ...backgroundColor }} onDoubleClick={deleteThisRow}>
      <TableCell>{name}</TableCell>
      <TableCell>{cost}</TableCell>
    </MUITableRow>
  );
};

export { TableRow };
