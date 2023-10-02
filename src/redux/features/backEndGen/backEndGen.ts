import { IModule } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

interface backEndGenState {
  modules: IModule[];
}

// Define the initial state using that type
const initialState: IModule[] = [];

export const backEndGen = createSlice({
  name: "backEndGen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewModuleByName: (state, action: PayloadAction<string>) => {
      state.push({
        name: action.payload,
        fields: [],
        shouldAddPaginationAndQuery: true,
        searchTermFields: [],
        exactTermFields: [],
      });
    },
    removeModuleByName: (state, action: PayloadAction<string>) => {
      return state.filter((single) => single.name !== action.payload);
    },
  },
});

export const { addNewModuleByName, removeModuleByName } = backEndGen.actions;

export default backEndGen.reducer;
