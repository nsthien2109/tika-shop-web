import "./ShopItem.scss";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../Modal/Modal";
import { categoryListSelector } from "../../../redux/selector";

const ShopItem = (store) => {
  const [openModal, setOpenModal] = useState(false);
  const categories = useSelector(categoryListSelector);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const category = categories.data.find((obj) => {
    return obj.id_category === store.store.id_category;
  });

  return (
    <>
      <div className="card shop-item" onClick={handleOpenModal}>
        <div className="avatar-shop">
          <div className="avatar-letter">T</div>
          <p className="shop-name">{store.store.storeName}</p>
        </div>
        <div className="overview-shop">
          <div className="number-reverse">
            <div className="total">
              <p>Products</p>
              <p>122</p>
            </div>
            <div className="total">
              <p>Reverse</p>
              <p>$151343</p>
            </div>
          </div>
          <div className="view-shop">
            <p>See profile</p>
            <i className="pl-1 ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>

      <Modal
        isOpen={openModal}
        title="Shop detail"
        handleModalEvent={handleOpenModal}>
        <div className="detail-shop w-full">
          <div className="detail-shop-header text-[13px] mt-3">
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop name :
              </span>{" "}
              {store.store.storeName}
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop email :
              </span>{" "}
              {store.store.storeEmail}
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop phone :
              </span>{" "}
              {store.store.storePhone}
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop address :
              </span>{" "}
              {store.store.storeAddress}
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop type :
              </span>{" "}
              {category?.categoryName}
            </p>
          </div>
          <hr />
          <div className="best-seller grid grid-cols-3 gap-2 mt-3"></div>
        </div>
      </Modal>
    </>
  );
};

export default ShopItem;
