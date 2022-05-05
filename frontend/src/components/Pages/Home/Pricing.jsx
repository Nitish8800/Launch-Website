import React from "react";
import Pricings from "./Data/Pricing";
import "./Pricing.css";
import SinglePricing from "./SinglePricing";

const Pricing = () => {
  return (
    <>
      <section className="pricing section_spacing text-center" id="pricing">
        <div className="container">
          <header id="Pricing" className="section-header">
            <h2 className="pricing_h2">We Provide Flexible Plans</h2>
            <h3 className="pricing_h3">
              Free signup. 14 days free trial. No credit card required.
            </h3>
          </header>
          <div className="row">
            <div className="col">
              <SinglePricing Pricings={Pricings} />
            </div>
          </div>
        </div>
      </section>

      <section class="section_p section_spacing text-center">
        <div class="container">
          <header class="section-header">
            <h2>Try Launch Today!</h2>
            <h3>
              Limited signup only. Order today before the discount period ends.
            </h3>
          </header>
          <div class="row">
            <div class="col">
              {" "}
              <a href="/" class="bttn">
                GET STARTED
              </a>
              <p>
                Have a question? Give us a call{" "}
                <a href="tel:+16582144789"> 658-214-4789</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
