import {DELETE} from "../actionTypes";

export function deleteRow(id: string) {
    return {
        type: DELETE,
        id: id
    };
}
