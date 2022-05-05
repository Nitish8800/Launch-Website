import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <>
      <section className="contact section-spacing text-center ">
        <div className="container con" style={{ margin: "auto" }}>
          <h3 style={{ color: "#4c4c4c" }}>&nbsp;</h3>
          <h3
            id="Contact"
            style={{ color: "#4c4c4c", marginTop: "30px", fontWeight: "bold" }}
          >
            Contact Us
          </h3>
          <h4 style={{ color: "#4c4c4c", margin: "10px" }}>
            Have any questions? Get in touch
          </h4>
          <div>
            <iframe
              style={{
                width: "100%",
                height: "30rem",
                margin: "auto",
                padding: "auto",
              }}
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.240475824126!2d77.0392573513728!3d28.592561782347413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ac540000001%3A0xc93e03a27379cc44!2sBhumi%20Itech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1651701925269!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
