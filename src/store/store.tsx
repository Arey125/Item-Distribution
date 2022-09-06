import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// eslint-disable-next-line import/no-internal-modules
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line import/no-internal-modules
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// eslint-disable-next-line import/no-internal-modules

import { reducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
