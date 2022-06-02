import React from "react";
import "./FormInput.scss";

export default function FormInput({ label, placeHolder, isInput, getInputHandler }) {

  return (
    <div className="form-input">
      <h2 htmlFor="">{label}</h2>
      {isInput ? (
        <input onChange={getInputHandler} type="text" placeholder={placeHolder} />
      ) : (
        <textarea onChange={getInputHandler} placeholder={placeHolder} />
      )}
    </div>
  );
}
