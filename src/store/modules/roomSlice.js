import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: sessionStorage.getItem("room"),
};

export const roomSlice = createSlice({
  name: "roomState",
  initialState,
  reducers: {
    roomStateFunc: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { roomStateFunc } = roomSlice.actions;

export default roomSlice.reducer;
