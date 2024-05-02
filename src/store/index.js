// store.js

import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../slice/studentSlice";

export default configureStore({
  reducer: {
    student: studentReducer,
    // Add other reducers if any
  },
});
