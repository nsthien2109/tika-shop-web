import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <>
      <div
        className={`${props.isOpen ? "flex" : "hidden"} modal-container`}
        onClick={props.handleModalEvent}>
        <div className={`flex close-modal`}>
          <i className="ri-close-line"></i>
        </div>
        <div
          className="w-full modal-content sm:w-4/5 md:w-3/5 lg:w-2/4"
          onClick={(event) => event.stopPropagation()}>
          <div className="text-sm font-semibold text-center uppercase title-modal">
            {props.title}
          </div>
          <div className="content-body">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
