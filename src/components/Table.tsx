import { useSelector } from "react-redux";
import {
    TableContainer,
    Paper,
    Table as MUITable,
    TableHead,
    TableRow as MUITableRow,
    TableCell,
    TableBody
} from "@mui/material";

import type { State } from "../store";
import TableRow from "./TableRow";

export const Table = () => {
  const table = useSelector((state: State) => Object.keys(state.table));

  return (
      <TableContainer sx={{width: 300, marginTop: "10px" }} component={Paper}>
          <MUITable size="small">
              <TableHead>
                  <MUITableRow>
                      <TableCell>Название</TableCell>
                      <TableCell>Стоимость</TableCell>
                  </MUITableRow>
              </TableHead>
              <TableBody>
                {table.map((rowID) => (
                  <TableRow key={rowID} id={rowID} />
                ))}
              </TableBody>
          </MUITable>
      </TableContainer>
  );
};
