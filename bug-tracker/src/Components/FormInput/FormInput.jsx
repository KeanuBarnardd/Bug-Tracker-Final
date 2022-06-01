import React from "react";
import "./FormInput.scss";

export default function FormInput({ label, placeHolder , isInput }) {
  return (
    <div className="form-input">
      <h2 htmlFor="">{label}</h2>
      {isInput ? <input type="text" placeholder={placeHolder} /> : <textarea placeholder={placeHolder} />}
    </div>
  );
}
