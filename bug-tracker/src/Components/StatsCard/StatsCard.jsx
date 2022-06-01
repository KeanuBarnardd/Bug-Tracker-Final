import React from "react";

import "./StatsCard.scss";

export default function StatsCard({ title, value, priority }) {
  return (
    <div className={`stats-card ${priority}`}>
      <h2>{title}</h2>
      <h1>{value}</h1>
    </div>
  );
}
