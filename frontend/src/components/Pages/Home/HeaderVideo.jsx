import * as React from "react";
import "./HeaderVideo.css";
export default function HeaderVideo() {
  return (
    <>
      <section className="video-tour text-center">
        <div className="play-btn  vid">
          {" "}
          <h1>Startup Landing Page For Your Product</h1>
          <h2>Perfect and awesome theme to present your product or service</h2>
          <a
            href="https://player.vimeo.com/video/109054393?h=853aa52fde"
            className="play litebox-tour"
          >
            <img
              src="http://csmthemes.com/themes/launch/image/img/play-btn-vs.png"
              alt="play"
            />
          </a>
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

        <video
          id="bgvid"
          poster="http://csmthemes.com/themes/launch/image/img/bg-video-preview.jpg"
        >
          <source src="https://vimeo.com/103007490" type="video/mp4" />
          <source src="https://vimeo.com/103007490" type="video/webm" />
        </video>
      </section>
    </>
  );
}
