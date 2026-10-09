
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import statsReducer from "./statsSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    stats: statsReducer,
  },
});