import axios from "axios";
import categorySlice from "../slice/categorySlice";
const server = "http://localhost:8000/api";

export const getCategories = async (dispatch) => {
  dispatch(categorySlice.actions.getAllCategoryStart());
  try {
    const response = await axios.get(`${server}/categories`);
    dispatch(categorySlice.actions.getAllCategorySuccess(response.data));
  } catch (error) {
    console.log(error.response);
    dispatch(
      categorySlice.actions.getAllCategoryFailure(error.response.data.message)
    );
  }
};

export const createCategory = async (categoryData, dispatch, token) => {
  dispatch(categorySlice.actions.createCategoryStart());
  try {
    console.log(categoryData);
    const response = await axios.post(`${server}/category`, categoryData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    await getCategories(dispatch);
    dispatch(categorySlice.actions.createCategorySuccess());
  } catch (error) {
    console.log(error.response);
    dispatch(
      categorySlice.actions.createCategoryFailure(error.response.data.message)
    );
  }
};

export const deleteCategory = async (dispatch, token, id) => {
  dispatch(categorySlice.actions.deleteCategoryStart());
  try {
    const response = await axios.delete(`${server}/category/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    await getCategories(dispatch);
    dispatch(categorySlice.actions.deleteCategorySuccess());
  } catch (error) {
    console.log(error.response);
    dispatch(
      categorySlice.actions.deleteCategoryFailure(error.response.data.message)
    );
  }
};

export const updateCategory = async (categoryData, dispatch, token, id) => {
  dispatch(categorySlice.actions.updateCategoryStart());
  try {
    const response = await axios.post(
      `${server}/category/${id}`,
      categoryData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    await getCategories(dispatch);
    dispatch(categorySlice.actions.updateCategorySuccess(response.data));
  } catch (error) {
    console.log(error.response);
    dispatch(
      categorySlice.actions.updateCategoryFailure(error.response.data.message)
    );
  }
};
