import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    showForm: true, // Initial state to show the form
  },
  reducers: {
    closeForm: (state) => {
      state.showForm = false; // Update state to close the form
    },
  },
});

export const { closeForm } = formSlice.actions;

export default formSlice.reducer;