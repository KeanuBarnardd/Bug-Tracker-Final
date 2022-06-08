import React from "react";
import ResolvedCard from "../../Components/ResolvedCard/ResolvedCard";

import "./Profile.scss";

export default function Profile({ bugDataCount, resolvedBugs }) {
  return (
    <div className="profile content">
      <div className="content-view">
        <h1>All resolved Bugs</h1>
        <p>
          You have a total of <span className="resolved-count-p">{bugDataCount.resolved}</span>{" "}
          resolved bugs
        </p>

        <div className="bug-grid">
          {resolvedBugs.map((resolvedBug, key) => (
            <ResolvedCard title={resolvedBug.title} date={resolvedBug.date} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
