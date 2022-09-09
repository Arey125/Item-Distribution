import { persistReducer } from "redux-persist";
// eslint-disable-next-line import/no-internal-modules
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// eslint-disable-next-line import/no-internal-modules
import storage from "redux-persist/lib/storage";
import { combineReducers, Reducer } from "redux";

// eslint-disable-next-line import/no-internal-modules
import { tableReducer } from "../components/tableSlice";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

export const rootReducer = combineReducers({ table: tableReducer });

export const persistedRootReducer = persistReducer(
  persistConfig,
  rootReducer as Reducer
);
