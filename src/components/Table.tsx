import { useMemo } from "react";

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
import { TableRow } from "./TableRow";
import { idSelector } from "./tableSlice";

const TABLE_CONTAINER_STYLE = { width: 300, marginTop: "10px" };

export const Table = () => {
  const rowIdsSelected = useAppSelector(idSelector);
  const rowIds = useMemo(() => rowIdsSelected, [rowIdsSelected]);

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
