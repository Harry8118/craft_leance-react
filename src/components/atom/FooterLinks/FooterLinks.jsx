import React from "react";
import PropTypes from "prop-types";
import './FooterLinks.scss'


const FooterLinks = ({ title, children }) => {
  return (
    <div className="footer_content-item">
      <h4 className="item_title">{title}</h4>
      {children}
    </div>
  );
};

FooterLinks.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FooterLinks;
