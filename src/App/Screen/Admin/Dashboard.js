import React, {useEffect} from "react";
import HeaderDashboard from "../../../components/Admin/Header/Header";
import NavBar from "../../../components/Admin/NavMobile/NavMobile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openNavbarSelector, openMenuSelector, accountSelector } from "../../../redux/selector";
import UiSlice from "../../../slice/uiSlice";

const DashBoard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenNav = useSelector(openNavbarSelector);
  const isOpenMenu = useSelector(openMenuSelector);
  const account = useSelector(accountSelector);
  const openNavbar = () => {
    dispatch(UiSlice.actions.openNavbar());
  };
  const openMenu = () => {
    dispatch(UiSlice.actions.openMenuSettings());
  };

  useEffect(() => {
    if(!account){
      navigate('/login');
    }
  });

  return (
    <>
      <div className="dashboard-wrapper">
        <NavBar closeNavbar={openNavbar} isOpenNav={isOpenNav} />
        <HeaderDashboard
          openNavbar={openNavbar}
          openMenu={openMenu}
          isOpenMenu={isOpenMenu}
        />
        <div className="dashboard-content">{props.children}</div>
      </div>
    </>
  );
};

export default DashBoard;
