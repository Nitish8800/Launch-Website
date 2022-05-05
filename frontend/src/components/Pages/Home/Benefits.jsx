import React from "react";
import "./Features.css";

const Benefits = ({ Data }) => {
  // console.log(Data);

  return (
    <>
      {Data.map((curElem) => {
        const { name, image, description } = curElem;

        return (
          <>
            <div className="col text-center">
              <img className="benefits" src={image} alt="benefits of product" />
              <h4 className="section_header h4">{name}</h4>
              <p>{description}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Benefits;
