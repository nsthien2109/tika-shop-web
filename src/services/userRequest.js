import axios from "axios";
import userSlice from "../slice/userSlice";
const server = "http://localhost:8000/api";

export const getAllUser = async (dispatch, token) => {
  dispatch(userSlice.actions.getAllUserStart());
  try {
    const response = await axios.get(`${server}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(userSlice.actions.getAllUserSuccess(response.data));
  } catch (error) {
    console.log(error.response);
    dispatch(userSlice.actions.getAllUserFailure(error.response.data.message));
  }
};

export const createUser = async (userData, token, dispatch) => {
  dispatch(userSlice.actions.createUserStart());
  try {
    await axios.post(`${server}/users`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getAllUser(dispatch, token);
    dispatch(userSlice.actions.createUserSuccess());
  } catch (error) {
    dispatch(userSlice.actions.createUserFailure(error.response.data.message));
  }
};

export const deleteUser = async (dispatch, token, id) => {
  dispatch(userSlice.actions.deleteUserStart());
  try {
    await axios.delete(`${server}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getAllUser(dispatch, token);
    dispatch(userSlice.actions.deleteUserSuccess());
  } catch (error) {
    console.log(error.response);
    dispatch(userSlice.actions.deleteUserFailure(error.response.data.message));
  }
};

export const updateUser = async (dataUser, dispatch, token, id) => {
  dispatch(userSlice.actions.updateUserStart());
  try {
    await axios.put(`${server}/users/${id}`, dataUser, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getAllUser(dispatch, token);
    dispatch(userSlice.actions.updateUserSuccess());
  } catch (error) {
    console.log(error.response);
    dispatch(userSlice.actions.updateUserFailure(error.response.data.message));
  }
};
