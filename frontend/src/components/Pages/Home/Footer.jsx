import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <footer className="site-footer section-spacing text-center">
        <div className="container">
          <div className="row">
            <div className="col_md">
              <p className="footer-links">
                <a href="/">Terms of Use</a> <a href="/">Privacy Policy</a>
              </p>
            </div>
            <div className="col_md">
              {" "}
              <small>© 2018 Launch. All rights reserved.</small>
            </div>
            <div className="col_md">
              <ul className="social" id="soc">
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
                <li>
                  <a href="/" target="_blank">
                    <YouTubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
