import React, { useEffect } from "react";
import CategoryTable from "../../../../components/Admin/CategoryTable/CategoryTable";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  accountSelector,
  categoryListSelector,
  categoryMessageSelector,
} from "../../../../redux/selector";
import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../../../services/categoryRequest";

const CategoryManagement = () => {
  const dispatch = useDispatch();
  const account = useSelector(accountSelector);
  const categories = useSelector(categoryListSelector);
  const message = useSelector(categoryMessageSelector);

  /** Create category */
  const handleCreateCategory = (categoryData) => {
    createCategory(categoryData, dispatch, account.accessToken);
  };

  /** Delete category */
  const handleDeleteCategory = (id) => {
    deleteCategory(dispatch, account.accessToken, id);
  };

  const handleUpdateCategory = (categoryData, id) => {
    updateCategory(categoryData, dispatch, account.accessToken, id);
  };

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  return (
    <div>
      <PageTitle title="Category Management" />
      <CategoryTable
        handleCreateCategory={handleCreateCategory}
        handleDeleteCategory={handleDeleteCategory}
        handleUpdateCategory={handleUpdateCategory}
        categories={categories}
        message={message}
      />
    </div>
  );
};

export default CategoryManagement;
