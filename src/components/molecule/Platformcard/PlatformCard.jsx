import React from "react";
import PropTypes from "prop-types";

import "./PlatformCard.scss";

const PlatformCard = ({ icon, title, description }) => {
  return (
    <li className="cardbox">
      {icon}
      <hr />
      <h2 className="cardbox__title">{title}</h2>
      <p className="cardbox__description">{description}</p>
    </li>
  );
};

PlatformCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PlatformCard;
