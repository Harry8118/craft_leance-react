import React from "react";
import PropTypes from "prop-types";

import "./PackageProductBtn.scss";

const PackageProductBtn = ({ clickBusiness, clickCommunity }) => {
  return (
    <div className="package__product">
      <button
        onClick={clickBusiness}
        id="business__btn"
        className="package__product__product__btn"
      >
        Business Edition
      </button>
      <button
        onClick={clickCommunity}
        id="community__btn"
        className="package__product__product__btn"
      >
        Community Edition
      </button>
      <span className="package__product__middle-or">or</span>
    </div>
  );
};

PackageProductBtn.propTypes = {
  clickBusiness: PropTypes.func,
  clickCommunity: PropTypes.func,
};

export default PackageProductBtn;
