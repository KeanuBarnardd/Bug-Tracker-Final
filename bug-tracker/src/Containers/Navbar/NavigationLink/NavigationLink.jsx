import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationLink.scss';

export default function NavigationLink({location,icon,text}){
  return(
    <NavLink className="link-style" to={location} >
      <i className={icon}></i>
      <p>{text}</p>
    </NavLink>
  )
}