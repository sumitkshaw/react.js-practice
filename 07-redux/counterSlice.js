/*
  Slice contains state + reducers.
  createSlice automatically generates actions.
  Reducers define how state changes.
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },

  reducers: {
    increment: (state) => {
      state.value += 1; // mutable syntax handled by Immer
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
