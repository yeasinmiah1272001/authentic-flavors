import { configureStore } from "@reduxjs/toolkit";

import spicyReducer from "./spicySlice";

export const store = configureStore({
  reducer: {
    spicy: spicyReducer,
  },
});
