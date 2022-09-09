import { TableRow as MUITableRow, TableCell } from "@mui/material";

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { deleteRow } from "./tableSlice";
import type { TRootState } from "../store";

type TProps = {
  id: string;
};

const ROW_STYLE = {
  red: { backgroundColor: "#fad2d2" },
  green: { backgroundColor: "#e3fbe3" },
  blue: { backgroundColor: "#e3f4fe" },
} as const;

const TableRow = ({ id }: TProps) => {
  const dispatch = useAppDispatch();
  const { name, cost, type } = useAppSelector(
    (state: TRootState) => state.table[id]
  );
  const backgroundColor = type && ROW_STYLE[type];

  const deleteThisRow = useCallback(() => {
    dispatch(deleteRow(id));
  }, [id, dispatch]);

  return (
    <MUITableRow sx={backgroundColor} onDoubleClick={deleteThisRow}>
      <TableCell>{name}</TableCell>
      <TableCell>{cost}</TableCell>
    </MUITableRow>
  );
};

export { TableRow };
