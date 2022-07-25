import React from "react";

const PageTitle = ({ title }) => {
  return (
    <>
      <div className="items-center justify-between content-header sm:flex">
        <div className="content-header-title">{title}</div>
        <div className="content-header-link">Dashboard / {title}</div>
      </div>
    </>
  );
};

export default PageTitle;
