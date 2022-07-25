import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "ui",
  initialState: {
    openNavbarMobile: false,
    openMenuSettings: false,
  },
  reducers: {
    openNavbar: (state, action) => {
      state.openNavbarMobile = !state.openNavbarMobile;
    },
    openMenuSettings: (state, action) => {
      state.openMenuSettings = !state.openMenuSettings;
    },
  },
});
