import {APPEND} from "../actionTypes";
import {RowWithoutTypeAndID} from "../reducers/rootReducer";

function appendRow(item: RowWithoutTypeAndID) {
    return {
        type: APPEND,
        item: item
    };
}

export default appendRow;