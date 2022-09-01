import axios from "axios";
import storeSlice from "../slice/storeSlice";
const server = "http://localhost:8000/api";

export const createStore = async (storeData, dispatch, token) => {
  dispatch(storeSlice.actions.createStoreStart());
  try {
    console.log(storeData);
    const response = await axios.post(`${server}/store`, storeData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(storeSlice.actions.createStoreSuccess(response.data));
  } catch (error) {
    console.log(error.response);
    dispatch(
      storeSlice.actions.createStoreFailure(error.response.data.message)
    );
  }
};

export const getStores = async (dispatch) => {
  dispatch(storeSlice.actions.readStoreStart());
  try {
    const response = await axios.get(`${server}/stores`);
    dispatch(storeSlice.actions.readStoreSuccess(response.data));
  } catch (error) {
    dispatch(storeSlice.actions.readStoreFailure(error.response.data.message));
  }
};

export const updateStore = async (storeData, dispatch, token, id) => {
  dispatch(storeSlice.actions.updateStoreStart());
  try {
    const response = await axios.post(`${server}/store/${id}`, storeData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getStores(dispatch);
    dispatch(storeSlice.actions.updateStoreSuccess(response.data));
  } catch (error) {
    dispatch(
      storeSlice.actions.updateStoreFailure(error.response.data.message)
    );
  }
};

export const deleteStore = async (dispatch, token, id) => {
  dispatch(storeSlice.actions.deleteStoreStart());
  try {
    const response = await axios.delete(`${server}/store/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getStores(dispatch);
    dispatch(storeSlice.actions.deleteStoreSuccess());
  } catch (error) {
    console.log(error.response);
    dispatch(
      storeSlice.actions.deleteStoreFailure(error.response.data.message)
    );
  }
};
