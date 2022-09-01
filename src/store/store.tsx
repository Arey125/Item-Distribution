import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers";
import initialState from "./initialState";

export const store = createStore(reducer, initialState);
