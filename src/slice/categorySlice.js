import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "categories",
  initialState: {
    categories: null,
    fetching: false,
    success: false,
    error: false,
    message: null,
  },
  reducers: {
    /** Read event */
    getAllCategoryStart: (state, action) => {
      state.fetching = true;
      state.message = null;
    },
    getAllCategorySuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = null;
      state.categories = action.payload;
    },
    getAllCategoryFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Create event */
    createCategoryStart: (state, action) => {
      state.fetching = true;
      state.message = null;
    },
    createCategorySuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    createCategoryFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Delete event */
    deleteCategoryStart: (state, action) => {
      state.fetching = true;
      state.message = null;
    },
    deleteCategorySuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = null;
    },
    deleteCategoryFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
    /** Update event */
    updateCategoryStart: (state, action) => {
      state.fetching = true;
      state.message = null;
    },
    updateCategorySuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.error = false;
      state.message = action.payload;
    },
    updateCategoryFailure: (state, action) => {
      state.fetching = false;
      state.success = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});
