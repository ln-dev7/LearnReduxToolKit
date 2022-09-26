import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlide = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      // { type: "todo/addtask", payload: "Aller faire les courses" }
      const newTask = {
        text: action.payload,
        id: Date.now(),
        done: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // { type: "todo/toggletask", payload: 20 }
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // { type: "todo/deletetask", payload: 20 }
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlide.reducer,
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlide.actions;

// Action Creator
export const createToggle = (id) => {
  return {
    type: "todo/toggleTask",
    payload: id,
  };
};
