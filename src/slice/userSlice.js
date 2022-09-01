import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name : 'users',
    initialState : {
        users : null,
        fetching : false,
        success : false,
        error : false,
        message : null,
    },

    reducers : {
        getAllUserStart : (state, action) => {
            state.fetching = true;
            state.message = null;
        },
        getAllUserSuccess : (state, action) => {
            state.fetching = false;
            state.success = true;
            state.error = false;
            state.message = null;
            state.users = action.payload;
        },
        getAllUserFailure : (state, action) => {
            state.fetching = false;
            state.success = false;
            state.error = true;
            state.message = action.payload;
        },

        /** Create a new user */

        createUserStart : (state, action) => {
            state.fetching = true;
        },

        createUserSuccess : (state, action) => {
            state.fetching = false;
            state.success = true;
            state.error = false;
            state.message = null;
        },

        createUserFailure : (state, action) => {
            state.fetching = false;
            state.success = false;
            state.error = true;
            state.message = action.payload;
        },

        deleteUserStart : (state, action) => {
            state.fetching = true;
            state.message = null;
        },
        deleteUserSuccess : (state, action) => {
            state.fetching = false;
            state.success = true;
            state.error = false;
            state.message = null;
        },
        deleteUserFailure : (state, action) => {
            state.fetching = false;
            state.success = false;
            state.error = true;
            state.message = action.payload;
        },

        /**Update even*/
        updateUserStart : (state, action) => {
            state.fetching = true;
            state.success = false;
            state.error = false;
        },
        updateUserSuccess : (state, action) => {
            state.fetching = false;
            state.error = false;
            state.message = null;
            state.success = true;
        },
        updateUserFailure : (state, action) => {
            state.fetching = false;
            state.success = false;
            state.error = true;
            state.message = action.payload;
        }
    }
});