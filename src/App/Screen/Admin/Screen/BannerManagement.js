import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerTable from "../../../../components/Admin/BannerTable/BannerTable";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import {
  accountSelector,
  bannerListSelector,
} from "../../../../redux/selector";

import {
  getBanners,
  createBanner,
  deleteBanner,
  updateBanner,
} from "../../../../services/bannerRequest";

const BannerManagement = () => {
  const dispatch = useDispatch();
  const account = useSelector(accountSelector);
  const banners = useSelector(bannerListSelector);

  useEffect(() => {
    getBanners(dispatch);
  }, []);

  const handleAddBanner = (bannerData) => {
    createBanner(bannerData, dispatch, account.accessToken);
  };

  const handleDeleteBanner = (id) => {
    deleteBanner(dispatch, account.accessToken, id);
  };

  const handleUpdateBanner = (bannerData, id) => {
    updateBanner(bannerData, dispatch, account.accessToken, id);
  };

  return (
    <div>
      <PageTitle title="Banner Management" />
      <BannerTable
        banners={banners}
        handleAddBanner={handleAddBanner}
        handleDeleteBanner={handleDeleteBanner}
        handleUpdateBanner={handleUpdateBanner}
      />
    </div>
  );
};

export default BannerManagement;
