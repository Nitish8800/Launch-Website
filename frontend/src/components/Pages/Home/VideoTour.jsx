import * as React from "react";
import { useState } from "react";
import "./VideoTour.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function VideoTour() {
  const [isOpen, setIsOpne] = useState(false);
  return (
    <>
      <section className="video-tour text-center">
        <div className="play-btn">
          {" "}
          {/* <a
            href="https://player.vimeo.com/video/109054393?h=853aa52fde"
            className="play litebox-tour"
          > */}
          {isOpen && (
            <div className="cont" onClick={() => setIsOpne(false)}>
              <div className="popup">
                <iframe
                  width="750px"
                  height="425px"
                  src="https://player.vimeo.com/video/225434434?"
                ></iframe>
              </div>
            </div>
          )}
          <img
            onClick={() => setIsOpne(!isOpen)}
            src="http://csmthemes.com/themes/launch/image/img/play-btn-vs.png"
            alt="play"
          />
          {/* </a> */}
          <h2>Video Preview Of Product</h2>
        </div>

        <video
          id="bgvid"
          poster="http://csmthemes.com/themes/launch/image/img/bg-video-preview.jpg"
        >
          <source src="https://vimeo.com/103007490" type="video/mp4" />
          <source src="https://vimeo.com/103007490" type="video/webm" />
        </video>
      </section>

      <section className="tour section-spacing text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 center-block">
              <h2>
                Learn More About The Product{" "}
                <a href="/" className="btn">
                  TAKE A TOUR
                  <ArrowForwardIcon fontSize="inherit" id="arrow_icon" />
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
