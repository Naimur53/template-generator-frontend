import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ICommonPackage, ITechnology } from "@/interface";
interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
// Define a type for the slice state
interface frontEndGenState {
  name: string | undefined;
  technology: ITechnology;
  pages: string[];
  cssFrameWork: string | undefined;
  npmPackages: ICommonPackage[];
  hooks: string[];
  auths: string[];
  firebaseConfig?: IFirebaseConfig;
}

// Define the initial state using that type
const initialState: frontEndGenState = {
  name: undefined,
  technology: ITechnology.JavaScript,
  pages: ["home"],
  cssFrameWork: undefined,
  npmPackages: [],
  hooks: [],
  auths: [],
  firebaseConfig: undefined,
};

export const frontEndGen = createSlice({
  name: "frontEndGen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
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
    addAuth: (state, action: PayloadAction<string>) => {
      state.auths.push(action.payload);
    },
    removeAuth: (state, action: PayloadAction<string>) => {
      state.auths = state.auths.filter((single) => single !== action.payload);
    },
    addFirebaseConfig: (
      state,
      action: PayloadAction<IFirebaseConfig | undefined>
    ) => {
      state.firebaseConfig = action.payload;
    },
  },
});

export const {
  addName,
  addTechnology,
  addPage,
  removePage,
  addCssFrameWork,
  addNpmPackages,
  removePackage,
  addHook,
  removeHook,
  addAuth,
  removeAuth,
} = frontEndGen.actions;

export default frontEndGen.reducer;
