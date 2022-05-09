import React from "react";

import { FaSignInAlt } from "react-icons/fa";
import { BiUnlink } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";
import "./SignUpButtons.scss";

const SignUpButtons = () => {
  return (
    <div className="signup__btn-box">
      <div className="signup__item-box">
        <div className="signup__item">
          <a href="#">
            <FaSignInAlt className="item__icon" />
          </a>
          Community Edition
        </div>
        <div className="signup__item">
          <a href="#">
            <BiUnlink className="item__icon" />
          </a>
          Community Edition
        </div>
        <div className="signup__item">
          <a href="#">
            <BsCheckSquare className="item__icon" />
          </a>
          Sign up
        </div>
      </div>
    </div>
  );
};

export default SignUpButtons;
