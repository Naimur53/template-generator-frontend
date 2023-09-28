import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ICommonPackage, ITechnology } from "@/interface";

// Define a type for the slice state
interface frontEndGenState {
  technology: ITechnology;
  pages: string[];
  cssFrameWork: string | undefined;
  npmPackages: ICommonPackage[];
  hooks: string[];
}

// Define the initial state using that type
const initialState: frontEndGenState = {
  technology: ITechnology.JavaScript,
  pages: ["home"],
  cssFrameWork: undefined,
  npmPackages: [],
  hooks: [],
};

export const frontEndGen = createSlice({
  name: "frontEndGen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTechnology: (state, action: PayloadAction<ITechnology>) => {
      state.technology = action.payload;
    },
    addPage: (state, action: PayloadAction<string>) => {
      state.pages.push(action.payload);
    },
    removePage: (state, action: PayloadAction<string>) => {
      state.pages = state.pages.filter((single) => single !== action.payload);
    },
    addCssFrameWork: (state, action: PayloadAction<string | undefined>) => {
      state.cssFrameWork = action.payload;
    },
    addNpmPackages: (state, action: PayloadAction<ICommonPackage[]>) => {
      state.npmPackages.push(...action.payload);
    },
    removePackage: (state, action: PayloadAction<ICommonPackage>) => {
      state.npmPackages = state.npmPackages.filter(
        (single) => single.name !== action.payload.name
      );
    },
    addHook: (state, action: PayloadAction<string>) => {
      state.hooks.push(action.payload);
    },
    removeHook: (state, action: PayloadAction<string>) => {
      state.hooks = state.hooks.filter((single) => single !== action.payload);
    },
  },
});

export const {
  addTechnology,
  addPage,
  removePage,
  addCssFrameWork,
  addNpmPackages,
  removePackage,
  addHook,
  removeHook,
} = frontEndGen.actions;

export default frontEndGen.reducer;
