import "./ShopItem.scss";

import React from "react";

const ShopItem = () => {
  return (
    <>
      <div className="card shop-item">
        <div className="avatar-shop">
          <div className="avatar-letter">T</div>
          <p className="shop-name">Channel</p>
        </div>
        <div className="overview-shop">
          <div className="number-reverse">
            <div className="total">
              <p>Products</p>
              <p>122</p>
            </div>
            <div className="total">
              <p>Reverse</p>
              <p>$151343</p>
            </div>
          </div>
          <div className="view-shop">
            <p>See profile</p>
            <i className="pl-1 ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItem;
