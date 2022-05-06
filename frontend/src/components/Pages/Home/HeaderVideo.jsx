import * as React from "react";
import "./HeaderVideo.css";
import { useState } from "react";
import "./VideoTour.css";

export default function HeaderVideo() {
  const [isOpen, setIsOpne] = useState(false);
  return (
    <>
      <section className="video-tour text-center">
        <div className="play-btn  vid">
          {" "}
          <h1>Startup Landing Page For Your Product</h1>
          <h2>Perfect and awesome theme to present your product or service</h2>
          <img
           onClick={() => setIsOpne(!isOpen)}
            src="http://csmthemes.com/themes/launch/image/img/play-btn-vs.png"
            alt="play"
          />
          <div className="cta-btn">
            {" "}
            <a href="/" className="btn buttn">
              GET STARTED
            </a>
            <p className="total_number">
              <span>50</span>K Worldwide Signups
            </p>
          </div>
        </div>
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

        <video
          id="bgvid"
          poster="http://csmthemes.com/themes/launch/image/img/bg-video-preview.jpg"
        >
          {/* <source src="https://vimeo.com/103007490" type="video/mp4" /> */}
          {/* <source src="https://vimeo.com/103007490" type="video/webm" /> */}
        </video>
      </section>
    </>
  );
}
