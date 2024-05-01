import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   StudentDetails:[],
};

const studentSlice = createSlice({
    name:"details",
    initialState,
    reducers : {
       SetStudentDetails:(state,action)=>{
        state.StudentDetails = action.payload;
       } 
    },   
});

export const {SetStudentDetails} = studentSlice.actions;

export default studentSlice.reducer; 