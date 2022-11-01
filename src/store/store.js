import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slice/projectslice";
import memberReducer from "../slice/memberslice";
import adminProjectReducer from "../adminprojects/adminprojectslice";



export const store = configureStore({
  reducer: {
    project: projectReducer,
    member: memberReducer,
    adminProject: adminProjectReducer,
    // myProject: myProjectReducer
  },
});
