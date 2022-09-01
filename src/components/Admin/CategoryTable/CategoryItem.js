import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";
const CategoryItem = ({
  category,
  handleDeleteCategory,
  handleUpdateCategory,
}) => {
  const [editForm, setEditForm] = useState(false);
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [categoryDescription, setCategoryDescription] = useState(
    category.categoryDescription
  );
  const [categoryImage, setCategoryImage] = useState();

  const updateCategory = (event) => {
    event.preventDefault();
    const categoryData = new FormData();
    if (categoryName) categoryData.append("categoryName", categoryName);
    if (categoryDescription)
      categoryData.append("categoryDescription", categoryDescription);
    if (categoryImage) categoryData.append("categoryImage", categoryImage);
    handleUpdateCategory(categoryData, category.id_category);
    setEditForm(!editForm);
  };
  return (
    <>
      <tr className="text-center">
        <td>{category.id_category}</td>
        <td>{category.categoryName}</td>
        <td className="flex justify-center items-center my-1">
          <div className="w-[50px] h-[40px] rounded-md">
            <img
              src={`http://localhost:8000/Images/Category/${category.categoryImage}`}
              alt=""
              className="object-cover rounded-sm border border-gray-400 p-[2px]"
            />
          </div>
        </td>
        <td className="hidden lg:table-cell">{category.categoryDescription}</td>
        <td>{category.numProducts}</td>
        <td className="items-center justify-around hidden md:flex">
          <button
            onClick={() => setEditForm(!editForm)}
            className="flex items-center px-2 py-1 text-white rounded-lg bg-slate-500">
            <i className="pr-1 ri-quill-pen-line"></i>Edit
          </button>
          <button
            onClick={() => handleDeleteCategory(category.id_category)}
            className="flex items-center px-2 py-1 text-white bg-red-400 rounded-lg">
            <i className="pr-1 ri-delete-bin-4-line"></i>Delete
          </button>
        </td>
      </tr>
      <Modal
        isOpen={editForm}
        handleModalEvent={() => setEditForm(!editForm)}
        title="Edit category">
        <form onSubmit={updateCategory} encType="multipart/form-data">
          <TextInput
            label="Category Name"
            type="text"
            value={categoryName}
            placeholder="Enter first name"
            onChange={(event) => setCategoryName(event.target.value)}
          />
          <TextInput
            label="Category Description"
            type="text"
            value={categoryDescription}
            placeholder="Enter last name"
            onChange={(event) => setCategoryDescription(event.target.value)}
          />
          <div className="form-input w-full mb-5 text-white">
            <label htmlFor="categoryImage">Category Image</label>
            <div className="image-category my-2">
              <img
                src={`http://localhost:8000/Images/Category/${category.categoryImage}`}
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

export default CategoryItem;
