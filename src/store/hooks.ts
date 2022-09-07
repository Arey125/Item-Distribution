import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { TState } from "./types";
import { store } from "./store";

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
