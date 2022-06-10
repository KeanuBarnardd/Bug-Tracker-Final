import React from "react";
import "./FormInput.scss";

export default function FormInput({ label, placeHolder, isInput, getInputHandler,value }) {

  return (
    <div className="form-input">
      <h2 htmlFor="">{label}</h2>
      {isInput ? (
        <input value={value} onChange={getInputHandler} type="text" placeholder={placeHolder} />
      ) : (
        <textarea value={value} onChange={getInputHandler} placeholder={placeHolder} />
      )}
    </div>
  );
}
