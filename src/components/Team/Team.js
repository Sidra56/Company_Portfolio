import React from "react";
import teamArray from "./TeamArray";
import "./team.scss";
import { TeamBlock } from "./teamblock.component";

export const Team = () => {
  return (
    <div className="team pa3">
      <div className="team-title">
        <h1 className="f1 white">OUR TEAM</h1>
        <p className="f3 b">
          "Talent wins games, but teamwork and intelligence win championships."
          – Michael Jordan
        </p>
      </div>
      <div className="team-img pa3">
        {teamArray.map((user) => (
          <TeamBlock
            image={user.image}
            name={user.name}
            designatin={user.designatin}
          />
        ))}
      </div>
    </div>
  );
};
