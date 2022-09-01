import React, { useEffect } from "react";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import UsersTable from "../../../../components/Admin/UsersTable/UsersTable";

import { useDispatch, useSelector } from "react-redux";
import {
  accountSelector,
  usersListSelector,
  userAllowedMessageSelector,
} from "../../../../redux/selector";
import {
  getAllUser,
  deleteUser,
  updateUser,
  createUser,
} from "../../../../services/userRequest";

const UsersManagement = () => {
  const dispatch = useDispatch();
  const account = useSelector(accountSelector);
  const userList = useSelector(usersListSelector);
  const message = useSelector(userAllowedMessageSelector);

  useEffect(() => {
    getAllUser(dispatch, account.accessToken);
  }, []);

  const handleCreateUser = (userData) => {
    createUser(userData, account.accessToken, dispatch);
  };

  const handleDeletUser = (id) => {
    deleteUser(dispatch, account.accessToken, id);
  };

  const handleUpdateUser = (dataUpdate, id) => {
    updateUser(dataUpdate, dispatch, account.accessToken, id);
  };

  return (
    <>
      <PageTitle title="Users management" />
      <UsersTable
        userList={userList}
        message={message}
        handleDeletUser={handleDeletUser}
        handleUpdateUser={handleUpdateUser}
        handleCreateUser={handleCreateUser}
      />
    </>
  );
};

export default UsersManagement;
