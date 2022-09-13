import { isEqual } from "../../libs";
import { IdSelector } from "../../model";
import { Row } from "./row";
// eslint-disable-next-line import/order
import {
  TableContainer,
  Paper,
  Table as MUITable,
  TableHead,
  TableRow as MUITableRow,
  TableCell,
  TableBody,
} from "@mui/material";
// eslint-disable-next-line import/order,import/no-internal-modules
import { useAppSelector } from "app/store";
// eslint-disable-next-line import/order
import { AnyAction } from "redux";

const TABLE_CONTAINER_STYLE = { marginTop: "10px" };

type TProps = {
  remove: (id: string) => AnyAction;
};

export const Table = ({ remove }: TProps) => {
  const rowIds = useAppSelector(IdSelector, isEqual);

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
            <Row key={id} id={id} remove={remove} />
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};