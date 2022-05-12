import React from "react";

import { FaSignInAlt } from "react-icons/fa";
import { BiUnlink } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";
import "./SignUpButtons.scss";

const SignUpButtons = () => {
  return (
    <div className="signup__btn">
      <div className="signup__btn__item-box">
        <div className="signup__btn__item-box__item">
          <a href="#">
            <FaSignInAlt className="signup__btn__item-box__icon" />
          </a>
          <span className="text">Community Edition</span>
        </div>
        <div className="signup__btn__item-box__item">
          <a href="#">
            <BiUnlink className="signup__btn__item-box__icon" />
          </a>
          <span className="text">Community Edition</span>
        </div>
        <div className="signup__btn__item-box__item">
          <a href="#">
            <BsCheckSquare className="signup__btn__item-box__icon" />
          </a>
          <span>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpButtons;
