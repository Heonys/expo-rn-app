import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: "todo",
      });
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].state = state.todos[index].state === "todo" ? "done" : "todo";
      state.todos.push(state.todos.splice(index, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);

      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
