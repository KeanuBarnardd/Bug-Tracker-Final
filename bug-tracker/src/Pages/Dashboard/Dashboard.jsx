import React from "react";
import Bug from "../../Components/Bug/Bug";
import StatsCard from "../../Components/StatsCard/StatsCard";
import "./Dashboard.scss";

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
        <h1 className="head-2">All your current bugs</h1>
        <select name="" id="">
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div className="bug-grid">
          <Bug
            description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laudantium ipsum iste ex, quo dolorum aliquam doloribus sunt? Tenetur consequatur corrupti quisquam excepturi asperiores provident dolorum! Cumque dolor ratione sapiente?"}
            steps="lorem ipsum hello hows it going today your the best in the world"
            date="00/00/00"
            title={"Fix header box container"}
            version={"0.1"}
          />
        </div>
      </div>
    </div>
  );
}
