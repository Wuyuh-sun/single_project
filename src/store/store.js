import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import loginReducer from "./modules/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  
  middleware: [thunk]
})