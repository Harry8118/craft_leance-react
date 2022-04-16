import React from "react";
import PropTypes from "prop-types";
import "./PlatformCard.scss";

const PlatformCard = ({ icon, title, description }) => {
  return (
    <li className="card_box">
      {icon}
      <hr />
      <h2 className="card_title">{title}</h2>
      <p className="card_description">{description}</p>
    </li>
  );
};

PlatformCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PlatformCard;
