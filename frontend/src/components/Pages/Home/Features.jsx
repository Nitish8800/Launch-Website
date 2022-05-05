import React from "react";
import "./Features.css";
import Data from "./Data/Data";
import Benefits from "./Benefits";
import VideoTour from "./VideoTour";

const Features = () => {
  return (
    <>
      {/* <!--benefits Start--> */}
      <div className="section_spacing">
        <div className="container">
          <header
            id="Features"
            style={{ display: "block" }}
            className="section_header"
          >
            <h2 className="text-center ">Main Benefits Of The Product</h2>

            <h3 className="text-center">
              Reasons why you should choose this product
            </h3>
          </header>

          <div className="row">
            <Benefits Data={Data} />
          </div>
        </div>
      </div>
      {/* <!--benefits end--> */}

      {/* Features */}

      <div className="features">
        <div className="container">
          {/* <!--feature 1 start --> */}

          <div className="row_2">
            <div className="col_2 col_s text-center" id="div_height">
              <img
                src="http://csmthemes.com/themes/launch/image/img/feature-1.png"
                alt="feature"
              />
            </div>
            <div className="col_3">
              <article>
                <h2>Lorem Ipsum Dolor Amet</h2>
                <p className="feautres_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rutrum eleifend arcu sit amet hendrerit. Etiam
                  tempor ante ac ipsum finibus, at consectetur urna tristique.
                  Nulla nec lacinia velit.{" "}
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Suspendisse rutrum eleifend</li>
                  <li>Nulla nec lacinia velit</li>
                </ul>
              </article>
            </div>
          </div>
          {/* <!--feature 1 end--> */}
          {/* <!--feature 2 Start--> */}

          <div className="row_2">
            <div className="col_2 col_s text-center marginTop" id="div_height">
              <img
                id="img_left"
                src="http://csmthemes.com/themes/launch/image/img/feature-2.png"
                alt="feature"
              />{" "}
            </div>
            <div className="col_4">
              <article>
                <h2>Lorem Ipsum Dolor Amet</h2>
                <p className="feautres_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rutrum eleifend arcu sit amet hendrerit. Etiam
                  tempor ante ac ipsum finibus, at consectetur urna tristique.
                  Nulla nec lacinia velit.{" "}
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Suspendisse rutrum eleifend</li>
                  <li>Nulla nec lacinia velit</li>
                </ul>
              </article>
            </div>
          </div>
          {/* <!--feature 2 end--> */}
          {/* <!--feature 3 Start--> */}

          <div className="row_2">
            <div
              className="col_2 col_s text-center marginTop marginBottom"
              id="div_height"
            >
              <img
                src="http://csmthemes.com/themes/launch/image/img/feature-3.png"
                alt="feature"
              />{" "}
            </div>
            <div className="col_3 marginTop ">
              <article>
                <h2>Lorem Ipsum Dolor Amet</h2>
                <p className="feautres_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rutrum eleifend arcu sit amet hendrerit. Etiam
                  tempor ante ac ipsum finibus, at consectetur urna tristique.
                  Nulla nec lacinia velit.{" "}
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Suspendisse rutrum eleifend</li>
                  <li>Nulla nec lacinia velit</li>
                </ul>
              </article>
            </div>
          </div>
          {/* <!--feature 3 end--> */}
        </div>
      </div>
      {/* Features end */}

      <VideoTour />
    </>
  );
};

export default Features;
