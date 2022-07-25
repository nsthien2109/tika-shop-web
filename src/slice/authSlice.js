import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name : 'auth',
    initialState : {
        login : {
            currentUser : null,
            isFetching : false,
            error : false
        },
        register : {
            isFetching : false,
            error : false,
            success : false,
        },
        message : null
    },
    reducers : {
        loginStart : (state, action) => {
            state.login.isFetching = true;
            state.message = null;
        },
        loginSuccess : (state, action) => {
            state.login.isFetching = false;
            state.login.error = false;
            state.login.currentUser = action.payload;
            state.message = null;
        },
        loginFailure : (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            state.login.success = false;
            state.message = action.payload;
        },

        /** Register a user */

        registerStart : (state, action) => {
            state.register.isFetching = true;
            state.message = null;
        },
        registerSuccess : (state, action) => {
            state.register.isFetching = false;
            state.register.success = true;
            state.register.error = false;
            state.message = null;
        },
        registerFailure : (state, action) => {
            state.register.isFetching = false;
            state.register.success = false;
            state.register.error = true;
            state.message = action.payload;
        }
    }
});