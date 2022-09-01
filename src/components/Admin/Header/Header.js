import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import avaDemo from "../../../assets/images/ava.png";
import {accountSelector} from '../../../redux/selector';

const HeaderDashboard = ({ openNavbar, openMenu, isOpenMenu }) => {
  const account = useSelector(accountSelector);

  const isOpenNav = () => {
    openNavbar();
  };

  const handleOpenMenu = () => {
    openMenu();
  };
  return (
    <>
      <div id="header-dashboard">
        <div className="header-left">
          <div className="menu-button" onClick={isOpenNav}>
            <i className="ri-menu-2-fill"></i>
          </div>
          <div className="logo">Tika</div>
        </div>
        <div className="header-right">
          <div className="some-button">
            <i className="ri-search-line"></i>
          </div>
          <div className="some-button">
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="avatar-container" onClick={openMenu}>
            <img src={avaDemo} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <div
        className={`header-settings ${
          isOpenMenu ? "right-4" : "right-[-100%]"
        }`}>
        <div className="name-admin">{!account ? 'User' : `${account.data.firstName} ${account.data.lastName}`}</div>
        <div className="header-settings-item">
          <i className="ri-admin-line"></i> <p>Profile</p>
        </div>
        <Link to="/login" className="header-settings-item">
          <i className="ri-logout-circle-r-line"></i> <p>Logout</p>
        </Link>
      </div>
    </>
  );
};

export default HeaderDashboard;
