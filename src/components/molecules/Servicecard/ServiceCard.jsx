import React from "react";
import PropTypes from "prop-types";

import { BsFillCheckCircleFill } from "react-icons/bs";
import Button from "components/atoms/Button/Button";
import "./ServiceCard.scss";

const ServiceCard = ({ title, price, keyword, tracking, newsLetter, hour }) => {
  return (
    <div className="service__card">
      <hr className="service__card__topline" />
      <h4 className="service__card__title">{title}</h4>
      <p className="service__card__price">
        <span>{price}</span>
        <span id="month">per month</span>
      </p>

      <div className="benefits">
        <p>
          <BsFillCheckCircleFill
            className={keyword ? "isbenefit" : "nobenefit"}
          />
          <span>20 Keyword (free)</span>
        </p>
        <p>
          <BsFillCheckCircleFill
            className={tracking ? "isbenefit" : "nobenefit"}
          />
          <span>No Time Tracking (free)</span>
        </p>
        <p>
          <BsFillCheckCircleFill className={hour ? "isbenefit" : "nobenefit"} />
          <span>230 - Man Hour (free)</span>
        </p>
        <p>
          <BsFillCheckCircleFill
            className={newsLetter ? "isbenefit" : "nobenefit"}
          />
          <span>Letter (free)</span>
        </p>
      </div>
      <Button className="service__card__btn" title="FREE NOW" />
      <span className="service__card__middleline"></span>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  keyword: PropTypes.bool,
  tracking: PropTypes.bool,
  hour: PropTypes.bool,
  newsLetter: PropTypes.bool,
};

export default ServiceCard;
