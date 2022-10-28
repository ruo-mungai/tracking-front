import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slice/projectslice";


export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
