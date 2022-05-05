import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Team.css";

const SingleTeam = ({ teams }) => {
  return (
    <>
      {teams.map((curElem) => {
        const { name, image, description, proffession } = curElem;

        return (
          <>
            <div className="col_team">
              <div className="team-details">
                <figure>
                  <img src={image} alt="Team Member" />
                  <figcaption>
                    <div>
                      <p>{description}</p>

                      <ul className="social">
                        <li>
                          <a href="/" target="_blank">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <FacebookIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </figcaption>
                </figure>
                <div className="team-info">
                  <h4>{name}</h4>
                  <h5>{proffession}</h5>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SingleTeam;
