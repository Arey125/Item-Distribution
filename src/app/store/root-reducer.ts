import { persistReducer } from "redux-persist";
// eslint-disable-next-line import/no-internal-modules
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// eslint-disable-next-line import/no-internal-modules
import storage from "redux-persist/lib/storage";
import { combineReducers, Reducer } from "redux";

// eslint-disable-next-line import/no-internal-modules
import { reducer as itemsReducer } from "shared/slices/items";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({ items: itemsReducer });

export const persistedRootReducer = persistReducer(
  persistConfig,
  rootReducer as Reducer
);

export type TRootState = ReturnType<typeof rootReducer>;
