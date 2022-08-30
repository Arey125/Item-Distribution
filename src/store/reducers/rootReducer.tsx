import {v4 as uuid} from "uuid";
import {Reducer} from "redux";
import distributeItems from "./distributeItems";
import initialState from "../initialState";
import {APPEND, DELETE, DISTRIBUTE} from "../actionTypes";

interface RowWithoutTypeAndID {
    name: string,
    cost: number,
}

interface Row extends RowWithoutTypeAndID{
    type: string | null
}

interface Table {
    [id: string]: Row
}

interface State {
    table: Table
}

function clearDistribution(table: Table): Table {
    return Object.fromEntries(Object.entries(table).map(([id, val]) => [id, {...val, type: null}]));
}

interface Append {
    type: 'APPEND',
    item: RowWithoutTypeAndID
}
interface Delete {
    type: 'DELETE',
    id: string
}
interface Distribute {
    type: 'DISTRIBUTE'
}

type Payload = Append | Delete | Distribute

const reducer: Reducer<State, Payload> = (state: State | undefined, action) => {
    if (typeof state === "undefined") {
        return initialState;
    }
    let {table} = state;
    table = clearDistribution(table);
    switch (action.type) {
        case APPEND:
            return {table: {...table, [uuid()]: {...action.item, type: null}}};

        case DELETE:
            const {id} = action;
            const {[id]: val, ...newTable} = table;
            return {table: newTable};

        case DISTRIBUTE:
            const entries = Object.entries(table)
            const values = entries.map(([id, {cost}]) => cost);
            const [, indices] = distributeItems(values);
            const types = ['red', 'green', 'blue'];
            const entriesWithDistribution = entries.map(([id, val], ind) => ([id, {...val, type: types[indices[ind]]}]));
            return { table: Object.fromEntries(entriesWithDistribution) };

        default:
            return {table};
    }
}

export default reducer;
export type {State, RowWithoutTypeAndID, Row}