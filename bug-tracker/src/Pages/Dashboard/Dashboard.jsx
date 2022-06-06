import React, { useState } from "react";
import Bug from "../../Components/Bug/Bug";
import StatsCard from "../../Components/StatsCard/StatsCard";
import "./Dashboard.scss";

export default function Dashboard({ bugList, getPriorityHandler, resolveBugHandler, bugDataCount }) {
  const [filterPriority, setFilterPriority] = useState("all");
  
  const filteredList = bugList.filter(function(bug){
    if(filterPriority !== 'all'){
      return bug.priority === filterPriority;
    }else{
      return bug;
    }
  });




  return (
    <div className="container-col content">
      <div className="content-view">
        <h1>Heres a review on your current bugs</h1>
        <div className="bug-stats-container">
          <StatsCard priority="low" title="Low" value={bugDataCount.low} />
          <StatsCard priority="medium" title="Medium" value={bugDataCount.medium} />
          <StatsCard priority="high" title="High" value={bugDataCount.high} />
          <StatsCard priority="resolved" title="Resolved" value={bugDataCount.resolved} />
        </div>
        <h1 className="head-2">All your current bugs</h1>
        <select onChange={(e)=> setFilterPriority(e.target.value)} name="" id="">
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div className="bug-grid">
          {filteredList.map((bug,key) => (
            <Bug
              title={bug.title}
              description={bug.description}
              steps={bug.steps}
              version={bug.version}
              date={bug.date}
              key={key}
              index={key}
              bugData={bug}
              getPriorityHandler={getPriorityHandler}
              resolveBugHandler={resolveBugHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
