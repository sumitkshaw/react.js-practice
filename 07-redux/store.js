/*
  Store is the central state container.
  It holds the global state of the app.
  All reducers are registered here.
*/

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
