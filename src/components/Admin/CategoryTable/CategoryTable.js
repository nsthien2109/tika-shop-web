import React, { useState, useEffect, useRef } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";
import CategoryItem from "./CategoryItem";
const CategoryTable = ({
  categories,
  message,
  handleCreateCategory,
  handleDeleteCategory,
  handleUpdateCategory,
}) => {
  const [addModal, setAddModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState();

  const openModal = () => {
    setAddModal(!addModal);
  };

  const resetState = (event) => {
    setAddModal(false);
    setCategoryName("");
    setCategoryDescription("");
    setCategoryImage(null);
  };

  const handleAddCategory = (event) => {
    event.preventDefault();
    const cateData = new FormData();
    cateData.append("categoryName", categoryName);
    cateData.append("categoryDescription", categoryDescription);
    cateData.append("categoryImage", categoryImage);
    handleCreateCategory(cateData);
    resetState();
  };

  return (
    <>
      <div className="table-dashboard card">
        <button
          onClick={openModal}
          className="items-center justify-center hidden rounded-full add-new-button sm:flex">
          <i className="ri-menu-add-line"></i>
        </button>
        <table className="table-auto">
          <thead className="header-table">
            <tr>
              <th>Id</th>
              <th>Category Name</th>
              <th>Category Image</th>
              <th className="hidden lg:table-cell">Category Description</th>
              <th>Number products</th>
              <th className="hidden md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="content-table">
            {categories.data.map((category) => {
              return (
                <CategoryItem
                  key={category.categoryName}
                  category={category}
                  handleDeleteCategory={handleDeleteCategory}
                  handleUpdateCategory={handleUpdateCategory}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={addModal}
        handleModalEvent={openModal}
        title="Add category">
        <form onSubmit={handleAddCategory} encType="multipart/form-data">
          <TextInput
            label="Category Name"
            type="text"
            placeholder="Enter categoty name"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
          />
          <TextInput
            label="Category Description"
            type="text"
            placeholder="Enter category description"
            value={categoryDescription}
            onChange={(event) => setCategoryDescription(event.target.value)}
          />
          <div className="form-input w-full mb-5 text-white">
            <label htmlFor="categoryImage">Category Image</label>
            <input
              id="categoryImage"
              className="input-form w-full mt-1 p-1 bg-emerald-600 rounded-sm"
              type="file"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              onChange={(event) => setCategoryImage(event.target.files[0])}
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

export default CategoryTable;
