import { useDispatch, useSelector } from "react-redux";
import {TableRow as MUITableRow, TableCell} from "@mui/material";

import { deleteRow } from "../store";
import type { State } from "../store";

type Props = {
  id: string;
};

const TableRow = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { name, cost, type } = useSelector((state: State) => state.table[id]);
  const backgroundColor = type && {
    red: "#fad2d2",
    green: "#e3fbe3",
    blue: "#e3f4fe"
  }[type]

  const deleteThisRow = () => {
    dispatch(deleteRow(id));
  };

  return (
      <MUITableRow sx={{backgroundColor}}
                   className={type === null ? undefined : type}
                   key={id}
                   onDoubleClick={deleteThisRow}
      >
        <TableCell>{name}</TableCell>
        <TableCell>{cost}</TableCell>
      </MUITableRow>
  );
};

export default TableRow;
