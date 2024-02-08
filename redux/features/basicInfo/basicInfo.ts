import { ITechnology } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface backEndGenState {
  name: string | undefined;
  technology: ITechnology;
}

// Define the initial state using that type
const initialState: backEndGenState = {
  name: undefined,
  technology: ITechnology.JavaScript,
};

export const basicInfo = createSlice({
  name: "basicInfo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addTechnology: (state, action: PayloadAction<ITechnology>) => {
      state.technology = action.payload;
    },
  },
});

export const { addName, addTechnology } = basicInfo.actions;

export default basicInfo.reducer;
