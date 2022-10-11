import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import loginReducer from "./modules/loginSlice";
import settingStateReducer from "./modules/settingSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    settingState : settingStateReducer
  },
  
  middleware: [thunk]
})