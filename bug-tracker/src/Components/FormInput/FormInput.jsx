import React from 'react'
import './FormInput.scss';

export default function FormInput({label}){
  return( 
    <div className="form-input">
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  )
}