import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slice/projectslice";
import memberReducer from "../slice/memberslice";


export const store = configureStore({
  reducer: {
    project: projectReducer,
    member: memberReducer,
  },
});
