import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "banners",
  initialState: {
    banners: null,
    fetching: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    /** Read */
    getAllBannerStart: (state) => {
      state.fetching = true;
      state.message = null;
    },
    getAllBannerSucess: (state, action) => {
      state.banners = action.payload;
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    getAllBannerFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Create */
    createBannerStart: (state) => {
      state.fetching = true;
      state.success = false;
      state.message = null;
      state.error = false;
    },

    createBannerSucess: (state) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = "Create banner success";
    },

    createBannerFailure: (state) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = "Create banner failure";
    },

    /** Update */

    updateBannerStart: (state) => {
      state.fetching = true;
      state.success = false;
      state.message = null;
      state.error = false;
    },

    updateBannerSucess: (state) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = "Update banner success";
    },

    updateBannerFailure: (state) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = "Update banner failure";
    },

    /** Delete */

    deleteBannerStart: (state) => {
      state.fetching = true;
      state.success = false;
      state.message = null;
      state.error = false;
    },

    deleteBannerSucess: (state) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = "Delete banner success";
    },

    deleteBannerFailure: (state) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = "Delete banner failure";
    },
  },
});
