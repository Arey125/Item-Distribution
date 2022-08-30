import React from 'react';
import {State} from "../store/reducers/rootReducer";
import {useDispatch, useSelector} from "react-redux";
import deleteRow from "../store/actionCreators/deleteRow";

interface Props {
    id: string
}

const TableRow: React.FC<Props> = ({id}) => {
    const dispatch = useDispatch();
    const {name, cost, type} = useSelector((state: State) => state.table[id])

    const deleteThisRow = () => {
        dispatch(deleteRow(id));
    };

    return (
        <tr
            className={type === null ? undefined : type}
            key={id}
            onDoubleClick={deleteThisRow}
        >
            <td>{name}</td>
            <td>{cost}</td>
        </tr>
    );
}

export default TableRow;