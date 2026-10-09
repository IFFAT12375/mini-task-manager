
import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    completedCount: 0,
  },
  reducers: {
    setCompletedCount: (state, action) => {
      state.completedCount = action.payload;
    },
  },
});

export const { setCompletedCount } = statsSlice.actions;
export default statsSlice.reducer;