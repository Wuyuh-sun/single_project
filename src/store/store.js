import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import loginReducer from "./modules/loginSlice";
import settingStateReducer from "./modules/settingSlice";
import roomStateReducer from "./modules/roomSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    settingState : settingStateReducer,
    roomState : roomStateReducer
  },
  
  middleware: [thunk]
})