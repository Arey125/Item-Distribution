import { useDispatch, useSelector } from "react-redux";

import { deleteRow } from "../store";
import type { State } from "../store";

type Props = {
  id: string;
};

const TableRow = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { name, cost, type } = useSelector((state: State) => state.table[id]);

  const deleteThisRow = () => {
    dispatch(deleteRow(id));
  };

  return (
    <tr
      className={type === null ? undefined : type}
      onDoubleClick={deleteThisRow}
    >
      <td>{name}</td>
      <td>{cost}</td>
    </tr>
  );
};

export default TableRow;
