/*
  createAsyncThunk handles async logic.
  It manages loading, success, and error states.
  Commonly used for API calls.
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return res.json();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, loading: false },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default userSlice.reducer;
