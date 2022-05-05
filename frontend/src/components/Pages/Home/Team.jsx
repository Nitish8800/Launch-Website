import * as React from "react";
import "./Team.css";
import SingleTeam from "./SingleTeam";
import teams from "./Data/Team";

export default function Team() {
  return (
    <>
      <section className="team sectionSpacing text-center " id="team">
        <div className="container">
          <header id="Team" className="section_header">
            <h2>Meet The Team</h2>
            <h3>Folks who created this awesome product</h3>
          </header>
          <div className="row_team" id="_team">
            <SingleTeam teams={teams} />
          </div>
        </div>
      </section>
    </>
  );
}
