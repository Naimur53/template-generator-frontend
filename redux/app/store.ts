import basicInfo from "@/redux/features/basicInfo/basicInfo";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import frontEndGen from "@/redux/features/frontEndGen/frontEndGen";
import backendGen from "@/redux/features/backEndGen/backEndGen";
import userSlice from "@/redux/features/user/userSlice";
import { apiSlice } from "../features/apiSlice/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    basicInfo,
    frontEndGen,
    backendGen,
    user: userSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares: any) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
