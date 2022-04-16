import React from "react";
import PropTypes from "prop-types";
import "./PackageProductBtn.scss";

const PackageProductBtn = ({ clickBusiness, clickCommunity }) => {
  return (
    <div className="package_product-btn">
      <button
        onClick={clickBusiness}
        id="business_btn"
        className="business_btn product_btn"
      >
        Business Edition
      </button>
      <button
        onClick={clickCommunity}
        id="community_btn"
        className="community_btn product_btn right_btn"
      >
        Community Edition
      </button>
      <span className="product_btn_middle-or">or</span>
    </div>
  );
};

PackageProductBtn.propTypes = {
  clickBusiness: PropTypes.func,
  clickCommunity: PropTypes.func,
};

export default PackageProductBtn;
