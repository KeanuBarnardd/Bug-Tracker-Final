import React from "react";
import StatsCard from "../../Components/StatsCard/StatsCard";
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="container-col content">
      <div className="content-view">
        <h1>Heres a review on your current bugs</h1>
        <div className="bug-stats-container">
          <StatsCard priority="low" title="Low" value="1" />
          <StatsCard priority="medium" title="Medium" value="1" />
          <StatsCard priority="high" title="High" value="2" />
          <StatsCard priority="resolved" title="Resolved" value="7" />
        </div>
      </div>
    </div>
  );
}
