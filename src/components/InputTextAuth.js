import React from "react";

const InputText = ({ label, type, placeholder, onChange }) => {
  return (
    <>
      <div className="form-input w-full">
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          className="input-form w-full"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputText;
