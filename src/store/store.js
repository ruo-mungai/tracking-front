import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../projects/projectslice";
import memberReducer from "../members/memberSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
