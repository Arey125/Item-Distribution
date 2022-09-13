import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedRootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store);
