import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommonPackage, IFirebaseConfig, ITechnology } from "@/interface";
import { ICssFrameworks } from "@/interface/common";

// Define a type for the slice state
interface frontEndGenState {
  pages: string[];
  cssFrameWork: ICssFrameworks | undefined;
  npmPackages: ICommonPackage[];
  hooks: string[];
  auths: string[];
  apis: string[];
  firebaseConfig?: IFirebaseConfig;
}

// Define the initial state using that type
const initialState: frontEndGenState = {
  pages: ["home"],
  cssFrameWork: undefined,
  npmPackages: [],
  hooks: [],
  auths: [],
  apis: [],
  firebaseConfig: undefined,
};

export const frontEndGen = createSlice({
  name: "frontEndGen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPage: (state, action: PayloadAction<string>) => {
      state.pages.push(action.payload);
    },
    removePage: (state, action: PayloadAction<string>) => {
      state.pages = state.pages.filter((single) => single !== action.payload);
    },
    addCssFrameWork: (
      state,
      action: PayloadAction<ICssFrameworks | undefined>
    ) => {
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
    addApis: (state, action: PayloadAction<string>) => {
      state.apis.push(action.payload);
    },
    removeApis: (state, action: PayloadAction<string>) => {
      state.apis = state.apis.filter((single) => single !== action.payload);
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
  addPage,
  removePage,
  addCssFrameWork,
  addNpmPackages,
  removePackage,
  addHook,
  removeHook,
  addAuth,
  removeAuth,
  addApis,
  removeApis,
  addFirebaseConfig,
} = frontEndGen.actions;

export default frontEndGen.reducer;
