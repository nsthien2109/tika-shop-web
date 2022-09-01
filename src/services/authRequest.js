import axios from "axios";
import authSlice from "../slice/authSlice";
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
};

export const login = async (userData, dispatch, navigate) => {
  dispatch(authSlice.actions.loginStart());
  try {
    const response = await axios.post(`${server}/login`, userData);
    dispatch(authSlice.actions.loginSuccess(response.data));
    if (response.data.data.role === "admin") {
      navigate("/admin-system");
    }
    if (response.data.data.role === "owner") {
      navigate("/admin-store");
    }
    if (response.data.data.role === "user") {
      navigate("/home");
    }
  } catch (error) {
    dispatch(authSlice.actions.loginFailure(error.response.data.message));
  }
};

export const getProfile = async (dispatch, token) => {
  dispatch(authSlice.actions.userStart());
  try {
    const response = await axios.get(`${server}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(authSlice.actions.userSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error.response);
    dispatch(authSlice.actions.userFailure(error.response.data.message));
  }
};
