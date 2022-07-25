import React from "react";

const MiniCard = ({ name, value, icon }) => {
  return (
    <>
      <div className="mini-card card">
        <div className="info-card">
          <p className="name-card">{name}</p>
          <p className="value-card">{value}</p>
        </div>
        <div className="icon-card">{icon}</div>
      </div>
    </>
  );
};

export default MiniCard;
