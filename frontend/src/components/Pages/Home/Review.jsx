import React from "react";
import Reviews from "./Data/Reviews";
import "./Features.css";
import SingleReview from "./SingleReview";

const Review = () => {
  return (
    <>
      <div className="section_spacing">
        <div className="container">
          <header
            id="Review"
            style={{ display: "block" }}
            className="section_header"
          >
            <h2 className="text-center ">Main Benefits Of The Product</h2>

            <h3 className="text-center">
              Reasons why you should choose this product
            </h3>
          </header>

          <div className="row">
            <SingleReview Reviews={Reviews} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
