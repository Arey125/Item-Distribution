import { TableRow as MUITableRow, TableCell } from "@mui/material";
import { AnyAction } from "redux";

import { useCallback } from "react";
// eslint-disable-next-line import/no-internal-modules
import { useAppDispatch, useAppSelector } from "app/store";
import { RowSelector } from "entities/items/table/model";

type TProps = {
  id: string;
  remove: (id: string) => AnyAction;
};

const ROW_STYLE = {
  red: { backgroundColor: "#fad2d2" },
  green: { backgroundColor: "#e3fbe3" },
  blue: { backgroundColor: "#e3f4fe" },
} as const;

export const Row = ({ id, remove }: TProps) => {
  const { name, cost, type } = useAppSelector(RowSelector(id));
  const backgroundColor = type && ROW_STYLE[type];

  const dispatch = useAppDispatch();

  const deleteThisRow = useCallback(() => {
    dispatch(remove(id));
  }, [id, dispatch, remove]);

  return (
    <MUITableRow sx={backgroundColor} onDoubleClick={deleteThisRow}>
      <TableCell>{name}</TableCell>
      <TableCell>{cost}</TableCell>
    </MUITableRow>
  );
};
