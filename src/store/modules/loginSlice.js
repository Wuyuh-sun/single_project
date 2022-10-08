import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: undefined,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginState:(state, action)=>{
      state.value = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { loginState } = loginSlice.actions;

export default loginSlice.reducer;