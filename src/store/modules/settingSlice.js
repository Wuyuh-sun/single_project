import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const settingSlice = createSlice({
  name: "settingState",
  initialState,
  reducers: {
    settingStateFunc: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { settingStateFunc } = settingSlice.actions;

export default settingSlice.reducer;
