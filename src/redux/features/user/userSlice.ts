// userSlice.ts

import { authKey } from "@/constants/storageKey";
import { IUser } from "@/interface/common";
import { allUrls } from "@/utils/allUrl";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: string | null;
  user: IUser | null;
}

const initialState: UserState = {
  loading: true,
  error: null,
  user: null,
};

// Define an asynchronous thunk for making the POST request
export const postUser = createAsyncThunk(
  "user/postUser",
  async (
    user: Omit<IUser, "_id" | "isBlocked" | "photoURL"> & {
      photoURL: string | undefined;
    }
  ) => {
    const response = await axios.post(allUrls.rootServerURL("/users"), user, {
      headers: {
        authorization: getFromLocalStorage(authKey),
      },
    }); // Replace with your API endpoint
    return response.data.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        0;
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(postUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(postUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export default userSlice.reducer;

// Export the postUser action for use in components
export const { setLoading, removeUser } = userSlice.actions;
