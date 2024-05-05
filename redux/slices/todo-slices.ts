import { createSlice } from "@reduxjs/toolkit";

interface todoTask {
  id: string;
  title: string;
  status: string;
}

const initialState: { tasks: todoTask[] } = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: todoTask = {
        id: Math.random().toString(36).substring(2),
        title: action.payload,
        status: "Pending",
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    toggleTask: (state, action) => {
      console.log("Payload received in toggleTask:", action.payload);
      const { taskId, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      console.log("Updated tasks in Redux state:", state.tasks);
      console.log("Tasks in localStorage:", localStorage.getItem("tasks"));
    },
  },
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
