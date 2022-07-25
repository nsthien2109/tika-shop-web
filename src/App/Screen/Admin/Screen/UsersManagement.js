import React from "react";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import UsersTable from "../../../../components/Admin/UsersTable/UsersTable";

const UsersManagement = () => {
  return (
    <>
      <PageTitle title="Users management" />
      <UsersTable />
    </>
  );
};

export default UsersManagement;
