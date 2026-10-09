
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return await response.json();
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.unshift({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },

    toggleTask: (state, action) => {
      const task = state.items.find(
        (item) => item.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Something went wrong";
      });
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;