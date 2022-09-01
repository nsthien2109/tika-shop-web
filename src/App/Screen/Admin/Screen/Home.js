import React,{useEffect} from "react";
import PageTitle from "../../../../components/Admin/PageTitle/PageTitle";
import ProfileCard from "../../../../components/Admin/ProfileCard/ProfileCard";
import MiniCard from "../../../../components/Admin/MiniCard/MiniCard";
import ChartDashboard from "../../../../components/Chart/Chart";
import OrderTable from "../../../../components/Admin/OrderTable/OrderTable";

import { useDispatch,useSelector } from "react-redux";
import { accountSelector } from "../../../../redux/selector";
import { getProfile } from "../../../../services/authRequest";



const HomeAdmin = () => {
  const account = useSelector(accountSelector);
  const dispatch = useDispatch();



  useEffect(()=>{
    document.title = "Dashboard"; 
    getProfile(dispatch,account.accessToken);
  });

  return (
    <>
      <PageTitle title="Dashboard" />
      <ProfileCard account={account?.data}/>
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
