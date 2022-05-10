import React from "react";
import PropTypes from "prop-types";
import "./FooterLinks.scss";

const FooterLinks = ({ title, children }) => {
  return (
    <div className="footer__content__item">
      <h4 className="footer__content__item__title">{title}</h4>
      <ul>{children}</ul>
    </div>
  );
};

FooterLinks.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FooterLinks;
