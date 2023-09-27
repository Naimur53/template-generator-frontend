import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ITechnology } from "@/interface";

// Define a type for the slice state
interface frontEndGenState {
  technology: ITechnology;
  pages: string[];
}

// Define the initial state using that type
const initialState: frontEndGenState = {
  technology: ITechnology.JavaScript,
  pages: ["home"],
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
  },
});

export const { addTechnology, addPage, removePage } = frontEndGen.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default frontEndGen.reducer;
