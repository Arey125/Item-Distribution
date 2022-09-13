import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { store } from "./store";
import { TRootState } from "./root-reducer";

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
