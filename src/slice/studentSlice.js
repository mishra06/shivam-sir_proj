// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//    StudentDetails:[],
// };

// const studentSlice = createSlice({
//     name:"details",
//     initialState,
//     reducers : {
//        addFormData:(state,action)=>{
//         state.StudentDetails.push(action.payload);
//        } 
//     },   
// });

// export const {addFormData} = studentSlice.actions;

// export default studentSlice.reducer;

// studentSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// export const studentSlice = createSlice({
//   name: "student",
//   initialState: {
//     formDataArray: [], // Initial state for form data array
//   },
//   reducers: {
//     addFormData: (state, action) => {
//       state.formDataArray.push(action.payload); // Add form data to the array
//     },
//   },
//   deleteFormData: (state, action) => {
//    state.formDataArray.splice(action.payload, 1);
//  },
// });

// export const { addFormData, deleteFormData } = studentSlice.actions;


// export const selectFormDataArray = (state) => state.student.formDataArray;

// export default studentSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    formDataArray: [], // Initial state for form data array
  },
  reducers: {
    addFormData: (state, action) => {
      state.formDataArray.push(action.payload); // Add form data to the array
    },
    deleteFormData: (state, action) => {
      state.formDataArray.splice(action.payload, 1);
    },
  },
});

export const { addFormData, deleteFormData } = studentSlice.actions;

export const selectFormDataArray = (state) => state.student.formDataArray;

export default studentSlice.reducer;

