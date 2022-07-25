import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "../slice/uiSlice";
import authSlice from "../slice/authSlice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
