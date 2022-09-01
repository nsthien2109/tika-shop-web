import React from "react";

const InputText = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  beforeLabel,
}) => {
  return (
    <>
      <div className="form-input w-full">
        <label className={beforeLabel} htmlFor={label}>
          {label}
        </label>
        <input
          id={label}
          className="input-form w-full"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputText;
