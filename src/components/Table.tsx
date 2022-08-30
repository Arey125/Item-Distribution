import { useSelector } from 'react-redux'
import {State} from "../store/reducers/rootReducer";
import TableRow from "./TableRow";
import "../styles/Table.css"

const Table = () => {
    const table = useSelector((state: State) => Object.keys(state.table))


    return (
        <table id="object-table">
            <thead>
            <tr>
            <th>Название</th>
            <th>Стоимость</th>
            </tr>
            </thead>
            <tbody>
                {table.map(rowID => <TableRow key={rowID} id={rowID} />)}
            </tbody>
        </table>
    );
}

export default Table;