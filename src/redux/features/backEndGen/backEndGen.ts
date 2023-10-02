import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IFields {
  fieldName: string;
  type: any;
  length: number;
  isRequired: boolean;
  isUnique: boolean;
}
interface IModule {
  name: string;
  fields: IFields[];
  shouldAddPaginationAndQuery: boolean;
  searchTermFields?: string[];
  exactTermFields?: string[];
}
interface backEndGenState {
  name: string | undefined;
  modules: IModule[];
}

// Define the initial state using that type
const initialState: backEndGenState = {
  name: undefined,
  modules: [],
};

export const backEndGen = createSlice({
  name: "backEndGen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewModuleByName: (state, action: PayloadAction<string>) => {
      state.modules.push({
        name: action.payload,
        fields: [],
        shouldAddPaginationAndQuery: true,
        searchTermFields: [],
        exactTermFields: [],
      });
    },
    removeModuleByName: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (single) => single.name !== action.payload
      );
    },
  },
});

export const { addNewModuleByName, removeModuleByName } = backEndGen.actions;

export default backEndGen.reducer;
