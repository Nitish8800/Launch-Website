import styled from "styled-components";
import MobileNav from "./MobileNav";
import "./Navbar.css";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";

const NavSec = styled.nav`
  background-color: #fff;
`;

export const NavItemEffect = styled.div`
  background-color: #fff;
  width: 100%;
  color: #f56363;
  height: 0.2em;
`;

const Logo = styled.img`
  float: left;
  display: block;
  background: #fff;
  max-width: 100%;
  height: auto;
  border: 0;
`;

const NavHeader = styled.header`
  background-color: transparent;
  color: white;
`;

const NavElement = styled.span`
  color: #4c4c4c;
  &:hover {
    color: #f56363;
  }
`;

export const Header = () => {
  const { userdata } = useSelector((state) => state);

  return (
    <NavSec>
      <NavHeader>
        <nav
          className="navbar  navbar-expand-lg navbar-light top-navbar"
          data-toggle="sticky-onscroll"
        >
          <div className="container">
            <a href="#HomeP" className="navbar-brand">
              <Logo
                src="http://csmthemes.com/themes/launch/image/img/logo-nav.svg"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MobileNav />
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav pull-right">
                <li className="nav-item pull-left">
                  <a href="#Features" className="nav-link active">
                    <NavElement> Features</NavElement>
                  </a>
                </li>
                <li className="nav-item pull-left">
                  <a href="#Review" className="nav-link active">
                    <NavElement> Reviews</NavElement>
                  </a>
                </li>
                <li className="nav-item pull-left">
                  <a href="#Pricing" className="nav-link active">
                    <NavElement> Pricing</NavElement>
                  </a>
                </li>
                <li className="nav-item pull-left">
                  <a href="#Team" className="nav-link active">
                    <NavElement> Team</NavElement>
                  </a>
                </li>
                <li className="nav-item pull-left">
                  <a href="#Contact" className="nav-link active">
                    <NavElement> Contact</NavElement>
                  </a>
                </li>

                <li className="nav-item pad">
                  <a href="#" className="btn download-btn">
                    <b style={{ textTransform: "uppercase" }}>
                      {userdata && userdata.isAdmin ? "student" : "Admin"}
                    </b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </NavHeader>
    </NavSec>
    // </div>
  );
};
