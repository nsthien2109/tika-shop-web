import React, { useState, useEffect } from "react";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import ShopItem from "../../../../components/Admin/ShopItem/ShopItem";
import Modal from "../../../../components/Modal/Modal";
import TextInput from "../../../../components/InputTextAuth";
import {
  accountSelector,
  usersListSelector,
  categoryListSelector,
  listStores,
} from "../../../../redux/selector";

import { createStore, getStores } from "../../../../services/storeRequest";

import { useDispatch, useSelector } from "react-redux";

const StoresManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersListSelector)?.data;
  const categories = useSelector(categoryListSelector)?.data;
  const account = useSelector(accountSelector);
  const stores = useSelector(listStores);

  const category = [
    { value: "", name: "Please select a category" },
    ...categories.map((category) => {
      return {
        value: category.id_category,
        name: category.categoryName,
      };
    }),
  ];

  const owners = [
    { value: "", email: "Please select owner" },
    ...users.map((user) => {
      return {
        value: user.id,
        email: user.email,
      };
    }),
  ];

  const [storeName, setStoreName] = useState("");
  const [storeWebsite, setStoreWebsite] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storeType, setStoreType] = useState(category[0].value);
  const [storeAddress, setStoreAddress] = useState("");
  const [storeCity, setStoreCity] = useState("");
  const [storeCountry, setStoreCountry] = useState("");
  const [storePhone, setStorePhone] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [storeOwner, setStoreOwner] = useState(owners[0].value);
  const [storeAvatar, setStoreAvatar] = useState();

  const resetState = () => {
    setStoreName();
    setStoreWebsite();
    setStoreDescription();
    setStoreType();
    setStoreAddress();
    setStoreCity();
    setStoreCountry();
    setStorePhone();
    setStoreEmail();
    setStoreOwner();
    setStoreAvatar();
  };

  const handleAddStore = (event) => {
    console.log(storeName);
    event.preventDefault();
    const storeData = new FormData();
    storeData.append("storeName", storeName);
    storeData.append("storeWebsite", storeWebsite);
    storeData.append("storeDescription", storeDescription);
    storeData.append("storeAddress", storeAddress);
    storeData.append("storeCity", storeCity);
    storeData.append("storeCountry", storeCountry);
    storeData.append("storePhone", storePhone);
    storeData.append("storeEmail", storeEmail);
    storeData.append("id_category", storeType);
    storeData.append("id_user", storeOwner);
    storeData.append("storeAvatar", storeAvatar);
    storeData.append("storePhone", storePhone);
    createStore(storeData, dispatch, account.accessToken);
    resetState();
  };

  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    getStores(dispatch);
  }, []);
  return (
    <>
      <PageTitle title="Stores management" />
      <div
        onClick={() => setAddModal(true)}
        className="text-center bg-neutral-500 py-1 px-2 text-white mb-2 flex justify-center items-center">
        Add store <i className="ri-store-line ml-2"></i>{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stores &&
          stores.map((store) => {
            return <ShopItem store={store} />;
          })}
      </div>
      <Modal
        isOpen={addModal}
        handleModalEvent={() => setAddModal(!addModal)}
        title="Add store">
        <form onSubmit={handleAddStore} encType="multipart/form-data">
          <TextInput
            label="Store Name"
            type="text"
            placeholder="Enter categoty name"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <TextInput
            label="Store Website"
            type="text"
            value={storeWebsite}
            onChange={(event) => setStoreWebsite(event.target.value)}
            placeholder="Enter store website"
          />
          <TextInput
            label="Store Description"
            value={storeDescription}
            onChange={(event) => setStoreDescription(event.target.value)}
            type="text"
            placeholder="Enter store description"
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <label
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
            htmlFor="owner">
            Store Type
          </label>
          <select
            id="storeType"
            name="storeType"
            value={storeType}
            onChange={(event) => setStoreType(event.target.value)}
            className="form-input w-full border px-2 py-1 rounded my-2">
            {category &&
              category.map((cate) => {
                return <option value={cate.value}>{cate.name}</option>;
              })}
          </select>
          <TextInput
            label="Store Address"
            type="text"
            value={storeAddress}
            onChange={(event) => setStoreAddress(event.target.value)}
            placeholder="Enter store description"
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <TextInput
            label="Store City"
            type="text"
            value={storeCity}
            onChange={(event) => setStoreCity(event.target.value)}
            placeholder="Enter store description"
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <TextInput
            label="Store Country"
            type="text"
            value={storeCountry}
            onChange={(event) => setStoreCountry(event.target.value)}
            placeholder="Enter store description"
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <TextInput
            label="Store Phone"
            type="text"
            value={storePhone}
            onChange={(event) => setStorePhone(event.target.value)}
            placeholder="Enter store description"
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <TextInput
            label="Store Email"
            type="text"
            value={storeEmail}
            onChange={(event) => setStoreEmail(event.target.value)}
            placeholder="Enter store description"
            beforeLabel="after:content-['*'] after:ml-0.5 after:text-red-500"
          />
          <label
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
            htmlFor="owner">
            Owner
          </label>
          <select
            id="owner"
            name="owner"
            value={storeOwner}
            onChange={(event) => setStoreOwner(event.target.value)}
            className="form-input w-full border px-2 py-1 rounded my-2">
            {owners &&
              owners.map((user) => {
                return <option value={user.value}>{user.email}</option>;
              })}
          </select>

          <div className="form-input w-full mb-5 text-white">
            <label htmlFor="storeAvatar">Store Avatar</label>
            <input
              id="storeAvatar"
              className="input-form w-full mt-1 p-1 bg-emerald-600 rounded-sm"
              type="file"
              onChange={(event) => setStoreAvatar(event.target.files[0])}
              accept="image/png, image/jpg, image/gif, image/jpeg"
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

export default StoresManagement;
