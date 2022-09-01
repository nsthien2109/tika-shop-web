import axios from "axios";
import bannerSlice from "../slice/bannerSlice";
const server = "http://localhost:8000/api";

export const getBanners = async (dispatch) => {
  dispatch(bannerSlice.actions.getAllBannerStart());
  try {
    const response = await axios.get(`${server}/banners`);
    dispatch(bannerSlice.actions.getAllBannerSucess(response.data));
  } catch (error) {
    console.log(error.response);
    dispatch(bannerSlice.actions.getAllBannerFailure(error.response));
  }
};

export const createBanner = async (bannerData, dispatch, token) => {
  dispatch(bannerSlice.actions.createBannerStart());
  try {
    await axios.post(`${server}/banner`, bannerData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    await getBanners(dispatch);
    dispatch(bannerSlice.actions.createBannerSucess());
  } catch (error) {
    console.log(error.response);
    dispatch(
      bannerSlice.actions.createBannerFailure(error.response.data.message)
    );
  }
};

export const deleteBanner = async (dispatch, token, id) => {
  dispatch(bannerSlice.actions.deleteBannerStart());
  try {
    await axios.delete(`${server}/banner/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getBanners(dispatch);
    dispatch(bannerSlice.actions.deleteBannerSucess());
  } catch (error) {
    console.log(error.response);
    dispatch(
      bannerSlice.actions.deleteBannerFailure(error.response.data.message)
    );
  }
};

export const updateBanner = async (bannerData, dispatch, token, id) => {
  dispatch(bannerSlice.actions.updateBannerStart());
  try {
    await axios.post(`${server}/banner/${id}`, bannerData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await getBanners(dispatch);
    dispatch(bannerSlice.actions.updateBannerSucess());
  } catch (error) {
    console.log(error.response);
    dispatch(
      bannerSlice.actions.updateBannerFailure(error.response.data.message)
    );
  }
};
