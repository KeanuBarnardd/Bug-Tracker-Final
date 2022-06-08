import React from 'react'

import './ResolvedCard.scss';


export default function ResolvedCard({title,date}){
  return(
    <div className="resolved-card">
      <h2>{title}</h2>
      <p>Completed Date: <span>{date}</span> </p>
    </div>
  )
}