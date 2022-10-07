import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";
import imageDemo from "../../../assets/images/bannerDemo.jpg";

const BannerItem = ({ banner, deleteBanner, updateBanner }) => {
  const [editForm, setEditForm] = useState(false);

  const [bannerName, setBannerName] = useState(banner.bannerName);
  const [bannerImage, setBannerImage] = useState();
  const [bannerDescription, setBannerDescription] = useState(
    banner.bannerDescription
  );
  const [bannerUrl, setBannerUrl] = useState(banner.bannerUrl);

  const changeEditForm = () => {
    setEditForm(!editForm);
  };

  const handleUpdateBanner = (event) => {
    event.preventDefault();
    const bannerData = new FormData();
    if (bannerName) bannerData.append("bannerName", bannerName);
    if (bannerDescription)
      bannerData.append("bannerDescription", bannerDescription);
    if (bannerUrl) bannerData.append("bannerUrl", bannerUrl);
    if (bannerImage) bannerData.append("bannerImage", bannerImage);
    updateBanner(bannerData, banner.id_banner);
    changeEditForm();
  };

  return (
    <>
      <tr className="text-center">
        <td>{banner.id_banner}</td>
        <td>{banner.bannerName}</td>
        <td className="flex justify-center items-center my-1">
          <div className="w-[120px] h-[70px] rounded-md">
            <img
              src={`http://localhost:8000/Images/Banner/${banner.bannerImage}`}
              alt=""
              className="object-cover rounded-sm border border-gray-400 p-[2px]"
            />
          </div>
        </td>
        <td className="hidden lg:table-cell">{banner.bannerDescription}</td>
        <td className="hidden lg:table-cell">{banner.bannerUrl}</td>
        <td className="items-center justify-around hidden  md:table-cell">
          <div className="w-full h-full flex justify-around items-center">
            <button
              onClick={changeEditForm}
              className="flex items-center px-2 py-1 text-white rounded-lg bg-slate-500">
              <i className="pr-1 ri-quill-pen-line"></i>Edit
            </button>
            <button
              onClick={() => deleteBanner(banner.id_banner)}
              className="flex items-center px-2 py-1 text-white bg-red-400 rounded-lg">
              <i className="pr-1 ri-delete-bin-4-line"></i>Delete
            </button>
          </div>
        </td>
      </tr>
      <Modal
        isOpen={editForm}
        handleModalEvent={changeEditForm}
        title="Edit banner">
        <form onSubmit={handleUpdateBanner} encType="multipart/form-data">
          <TextInput
            label="Banner Name"
            value={bannerName}
            type="text"
            onChange={(event) => setBannerName(event.target.value)}
          />
          <TextInput
            label="Banner Description"
            value={bannerDescription}
            type="text"
            onChange={(event) => setBannerDescription(event.target.value)}
          />
          <TextInput
            label="Banner Url"
            value={bannerUrl}
            onChange={(event) => setBannerUrl(event.target.value)}
            type="text"
          />
          <div className="form-input w-full mb-5 text-white">
            <label htmlFor="categoryImage">Banner Image</label>
            <div className="image-category my-2">
              <img
                src={`http://localhost:8000/Images/Banner/${banner.bannerImage}`}
                width="150"
                height="150"
                alt=""
              />
            </div>
            <input
              id="categoryImage"
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

export default BannerItem;
