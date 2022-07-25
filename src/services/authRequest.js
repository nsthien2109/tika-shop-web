import axios from 'axios';
import authSlice from '../slice/authSlice';
const server = "http://localhost:8000/api";

export const register = async (userData, dispatch, navigate) => {
    dispatch(authSlice.actions.registerStart());
    try {
        const response = await axios.post(`${server}/register`, userData);
        dispatch(authSlice.actions.registerSuccess());
        navigate("/login");
    } catch (error) {
        console.log(error);
        dispatch(authSlice.actions.registerFailure(error.response.data.message));
    }
}

export const login = async (userData, dispatch, navigate) => {
    dispatch(authSlice.actions.loginStart());
    try{
        const response = await axios.post(`${server}/login`, userData);
        dispatch(authSlice.actions.loginSuccess(response.data));
        navigate("/admin-system");
    }catch (error) {
        dispatch(authSlice.actions.loginFailure(error.response.data.message));
    }
}