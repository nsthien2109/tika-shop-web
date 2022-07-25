import React from "react";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import StoresTable from "../../../../components/Admin/StoreTable/StoresTable";
import ShopItem from "../../../../components/Admin/ShopItem/ShopItem";
import Modal from "../../../../components/Modal/Modal";
const StoresManagement = () => {
  return (
    <>
      <PageTitle title="Stores management" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
      <Modal isOpen={false} title="Shop detail">
        <div className="detail-shop w-full">
          <div className="detail-shop-header text-[13px] mt-3">
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop name :
              </span>{" "}
              Tika Shop Channel
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop email :
              </span>{" "}
              nsthien@gmail.com
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop phone :
              </span>{" "}
              0705459542
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop address :
              </span>{" "}
              Kwang Ping
            </p>
            <p className="text-green-700 my-2">
              <span className="shop-info w-[25%] inline-block text-black">
                Shop type :
              </span>{" "}
              Cosmetics
            </p>
          </div>
          <hr />
          <div className="best-seller grid grid-cols-3 gap-2 mt-3"></div>
        </div>
      </Modal>
    </>
  );
};

export default StoresManagement;
