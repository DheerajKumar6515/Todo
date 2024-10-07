import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todos/todosSlice'

export const store=configureStore({
    reducer: todoReducer
});
