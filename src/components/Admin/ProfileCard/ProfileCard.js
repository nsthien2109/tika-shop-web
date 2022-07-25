import React from "react";
import welcomImg from "../../../assets/images/welcome.png";
import avaDemo from "../../../assets/images/ava.png";

const ProfileCard = () => {
  return (
    <>
      <div className="profile-card card">
        <div className="profile-card-header ">
          <div className="header-left">
            <p className="welcome-title">Welcome Back !</p>
            <p className="subtitle">Tika Dashboard</p>
          </div>
          <div className="header-right">
            <img src={welcomImg} alt="" className="welcome-img" />
          </div>
          <div className="avatar">
            <img src={avaDemo} alt="" />
          </div>
        </div>
        <div className="profile-card-content">
          <div className="user-store">
            <p className="user-name">Si Thien</p>
            <p className="store-name">Nike</p>
          </div>
          <div className="button-profile">
            <button>
              View Store <i className="ri-arrow-right-circle-line"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
