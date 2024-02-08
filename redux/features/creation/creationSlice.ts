 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState { 
}

// Define the initial state using that type
const initialState: IInitialState = {
 
};

export const creationSlice = createSlice({
  name: "creation",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setCreation: (state, action: PayloadAction<any>) => { 

    },
   
  },
});

export const { setCreation } = creationSlice.actions;

export default creationSlice.reducer;
