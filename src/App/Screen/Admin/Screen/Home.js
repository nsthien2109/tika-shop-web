import React from "react";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import ProfileCard from "../../../../components/Admin/ProfileCard/ProfileCard";
import MiniCard from "../../../../components/Admin/MiniCard/MiniCard";
import ChartDashboard from "../../../../components/Chart/Chart";
import OrderTable from "../../../../components/Admin/OrderTable/OrderTable";
const HomeAdmin = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <ProfileCard />
      <MiniCard
        name="Users"
        value="20"
        icon={<i className="ri-user-5-line"></i>}
      />
      <MiniCard
        name="Stores"
        value="7"
        icon={<i className="ri-store-3-line"></i>}
      />
      <ChartDashboard />
      <OrderTable />
    </>
  );
};

export default HomeAdmin;
