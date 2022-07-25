import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isOpenNav, closeNavbar }) => {
  const closeNav = () => {
    closeNavbar();
  };

  return (
    <>
      <div
        className={`navbar-container ${
          isOpenNav ? "left-0" : "-left-full"
        } lg:left-0`}
        onClick={closeNav}>
        <div className="w-full h-full overlay-mobile active">
          <div
            className="navbar-content"
            onClick={(event) => event.stopPropagation()}>
            <div className="nav-header">Tika</div>
            <div className="navbar-list">
              <Link
                onClick={closeNav}
                to="/admin-system"
                className="w-full navbar-item">
                <i className="ri-ancient-gate-fill"></i>
                <p className="pl-3 navbar-item-title">Dashboard</p>
              </Link>
              <Link
                onClick={closeNav}
                to="/admin-system/users-management"
                className="w-full navbar-item">
                <i className="ri-aliens-line"></i>
                <p className="pl-3 navbar-item-title">Users</p>
              </Link>
              <Link
                to="/admin-system/stores-management"
                onClick={closeNav}
                className="w-full navbar-item">
                <i className="ri-store-2-line"></i>
                <p className="pl-3 navbar-item-title">Stores</p>
              </Link>
              <div onClick={closeNav} className="w-full navbar-item">
                <i className="ri-product-hunt-line"></i>
                <p className="pl-3 navbar-item-title">Product</p>
              </div>
              <div onClick={closeNav} className="w-full navbar-item">
                <i className="ri-user-follow-line"></i>s
                <p className="pl-3 navbar-item-title">Follower</p>
              </div>
              <div onClick={closeNav} className="w-full navbar-item">
                <i className="ri-advertisement-line"></i>
                <p className="pl-3 navbar-item-title">Banner</p>
              </div>
              <div onClick={closeNav} className="w-full navbar-item">
                <i className="ri-apps-2-line"></i>
                <p className="pl-3 navbar-item-title">Category</p>
              </div>
              <div onClick={closeNav} className="w-full navbar-item">
                <i className="ri-bill-line"></i>
                <p className="pl-3 navbar-item-title">Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
