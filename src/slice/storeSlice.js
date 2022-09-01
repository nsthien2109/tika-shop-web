import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "stores",
  initialState: {
    stores: null,
    fetching: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    /** Create */
    createStoreStart: (state, action) => {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },
    createStoreSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = action.payload;
    },
    createStoreFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Read */
    readStoreStart: (state, action) => {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },
    readStoreSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.stores = action.payload;
    },
    readStoreFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Update */
    updateStoreStart: (state, action) => {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },
    updateStoreSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
    },
    updateStoreFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Delete */
    deleteStoreStart: (state, action) => {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },
    deleteStoreSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
    },
    deleteStoreFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
