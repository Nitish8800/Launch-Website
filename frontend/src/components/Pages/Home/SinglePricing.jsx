import React from "react";
import "./SinglePricing.css";
import CheckIcon from "@mui/icons-material/Check";

const SinglePricing = ({ Pricings }) => {
  return (
    <>
      {Pricings.map((curElem) => {
        const { card_name, price, Shipping, Support, Licence, offer } = curElem;

        return (
          <>
            <div className="plan">
              <div className="plan-details">
                <div className="header">
                  <h4>{card_name}</h4>
                </div>
                <div className="price">
                  {" "}
                  <span className="currency">$</span>
                  <span className="price-amount">{price}</span>
                  <span className="period">/ mo</span>{" "}
                </div>
                <ul className="plan-features">
                  <li>
                    <span>{Shipping}</span> Shipping
                    <CheckIcon style={{ margin: "8px", color: "#f56363" }} />
                  </li>
                  <li>
                    <span>{Support}</span> Support
                    <CheckIcon style={{ margin: "8px", color: "#f56363" }} />
                  </li>
                  <li>
                    <span>{Licence}</span> Licence
                    <CheckIcon style={{ margin: "8px", color: "#f56363" }} />
                  </li>
                </ul>
              </div>
              <div className="buy-button">
                <a className="btn" href="/">
                  SIGNUP
                </a>
                <p>{offer}% OFF. Limited time offer.</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SinglePricing;
