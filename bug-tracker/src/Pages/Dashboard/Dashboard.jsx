import React from "react";
import Bug from "../../Components/Bug/Bug";
import StatsCard from "../../Components/StatsCard/StatsCard";
import "./Dashboard.scss";

export default function Dashboard({ bugList, getPriorityHandler }) {
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
          {bugList.map((bug) => (
            <Bug
              title={bug.title}
              description={bug.description}
              steps={bug.steps}
              version={bug.version}
              date={bug.date}
              key={bug.id}
              bugData={bug}
              getPriorityHandler={getPriorityHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
