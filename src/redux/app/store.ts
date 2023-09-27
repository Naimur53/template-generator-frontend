import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import frontEndGen from "../features/frontEndGen/frontEndGen";
export const store = configureStore({
  reducer: { frontEndGen: frontEndGen },
  devTools: process.env.NODE_ENV !== "production",
  //   middleware: (getDefaultMiddlewares) =>
  //     getDefaultMiddlewares().concat(apiSlice.middleware),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
