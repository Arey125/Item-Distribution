import { useRef } from "react";

import {
  TableContainer,
  Paper,
  Table as MUITable,
  TableHead,
  TableRow as MUITableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useAppSelector } from "../store";
import TableRow from "./TableRow";

const TABLE_CONTAINER_STYLE = { width: 300, marginTop: "10px" };

export const Table = () => {
  const rowIds = useAppSelector((state) => Object.keys(state.table));

  let { current: val } = useRef(0);
  val += 1;
  // eslint-disable-next-line no-console
  console.log(val);

  return (
    <TableContainer sx={TABLE_CONTAINER_STYLE} component={Paper}>
      <MUITable size="small">
        <TableHead>
          <MUITableRow>
            <TableCell>Название</TableCell>
            <TableCell>Стоимость</TableCell>
          </MUITableRow>
        </TableHead>
        <TableBody>
          {rowIds.map((id) => (
            <TableRow key={id} id={id} />
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
