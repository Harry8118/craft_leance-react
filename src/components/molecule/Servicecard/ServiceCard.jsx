import React from "react";
import PropTypes from "prop-types";
import "./ServiceCard.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Button from "../../atom/Button/Button";

const ServiceCard = ({ title, price, keyword, tracking, newsLetter, hour }) => {
  return (
    <div className="service_card">
      <hr className="service_card-topline" />
      <h4 className="service_title">{title}</h4>
      <p className="service_price">
        <span>{price}</span>
        <span>per month</span>
      </p>

      <div class="benefits">
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
      <Button className="service_btn" title="FREE NOW" />
      <span className="service_card-middleline"></span>
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
