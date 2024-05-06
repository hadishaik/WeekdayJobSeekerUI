import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../reduxSlice/cardSlice";

export const store = configureStore({
  reducer: {
    filter: cardSlice,
  },
});
