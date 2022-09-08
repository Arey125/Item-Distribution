import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
// eslint-disable-next-line import/no-internal-modules
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line import/no-internal-modules
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

// eslint-disable-next-line import/no-internal-modules
import { tableReducer } from "../components/tableSlice";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

// @ts-ignore
const persistedTableReducer = persistReducer(persistConfig, tableReducer);

export const store = configureStore({
  reducer: persistedTableReducer,
});

export const persistor = persistStore(store);
