import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/redux/slices/todo-slices";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
