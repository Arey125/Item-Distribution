import {DELETE} from "../actionTypes";

function deleteRow(id: string) {
    return {
        type: DELETE,
        id: id
    };
}

export default deleteRow;
