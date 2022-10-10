import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: undefined,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStateFunc:(state, action)=>{
      state.value = action.payload;
    }, 
   
  },
});

// Action creators are generated for each case reducer function
export const { loginStateFunc } = loginSlice.actions;

export default loginSlice.reducer;