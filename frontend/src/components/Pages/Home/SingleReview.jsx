import React from "react";
import "./Features.css";
import "./SingleReview.css";

const SingleReview = ({ Reviews }) => {
  return (
    <>
      {Reviews.map((curElem) => {
        const { name, image, description } = curElem;

        return (
          <>
            <div className="col text-center ">
              <img
                className="benefits circle_image"
                src={image}
                alt="benefits of product"
              />

              <blockquote>
                <p>{description}</p>
                <cite>— {name}</cite>{" "}
              </blockquote>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SingleReview;
