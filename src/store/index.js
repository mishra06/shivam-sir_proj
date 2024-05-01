import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../slice/studentSlice";

const store = configureStore({
    reducer : {
        studentSlice,
        

    }
})

export default store;