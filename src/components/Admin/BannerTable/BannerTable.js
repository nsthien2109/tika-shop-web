import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";
import BannerItem from "./BannerItem";

const BannerTable = ({
  banners,
  handleAddBanner,
  handleDeleteBanner,
  handleUpdateBanner,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [bannerName, setBannerName] = useState("");
  const [bannerImage, setBannerImage] = useState();
  const [bannerDescription, setBannerDescription] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");

  const changeStateModel = () => {
    setModalOpen(!modalOpen);
  };

  const createBanner = (event) => {
    event.preventDefault();
    const bannerData = new FormData();
    bannerData.append("bannerName", bannerName);
    bannerData.append("bannerUrl", bannerUrl);
    bannerData.append("bannerImage", bannerImage);
    bannerData.append("bannerDescription", bannerDescription);
    handleAddBanner(bannerData);
  };

  return (
    <>
      <div className="table-dashboard card">
        <button
          onClick={changeStateModel}
          className="items-center justify-center hidden rounded-full add-new-button sm:flex">
          <i className="ri-image-add-line"></i>
        </button>
        <table className="table-auto">
          <thead className="header-table">
            <tr>
              <th>Id</th>
              <th>Banner Name</th>
              <th>Banner Image</th>
              <th className="hidden lg:table-cell">Banner Description</th>
              <th className="hidden lg:table-cell">Banner Redirect</th>
              <th className="hidden md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="content-table">
            {banners &&
              banners.data.map((banner) => {
                return (
                  <BannerItem
                    key={banner.id_banner}
                    deleteBanner={handleDeleteBanner}
                    updateBanner={handleUpdateBanner}
                    banner={banner}
                  />
                );
              })}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalOpen}
        handleModalEvent={changeStateModel}
        title="Add Banner">
        <form onSubmit={createBanner} encType="multipart/form-data">
          <TextInput
            label="Banner Name"
            type="text"
            placeholder="Enter banner name"
            onChange={(event) => setBannerName(event.target.value)}
          />
          <TextInput
            label="Banner Description"
            type="text"
            placeholder="Enter banner description"
            onChange={(event) => setBannerDescription(event.target.value)}
          />
          <TextInput
            label="Banner Redirect"
            type="text"
            placeholder="Enter banner redirect"
            onChange={(event) => setBannerUrl(event.target.value)}
          />
          <div className="form-input w-full mb-5 text-white">
            <label htmlFor="bannerImage">Banner Image</label>
            <input
              id="bannerImage"
              className="input-form w-full mt-1 p-1 bg-emerald-600 rounded-sm"
              type="file"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              onChange={(event) => setBannerImage(event.target.files[0])}
            />
          </div>
          <div className="text-center submit-form">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BannerTable;
