import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { BiUnlink } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";

import "./SignUpButtons.scss";
const SignUpButtons = () => {
  return (
    <div className="signup_btn-box">
      <div className="signup_item-box">
        <div className="signup_item">
          <a href="#">
            <FaSignInAlt className="item_icon" />
          </a>
          Community Edition
        </div>
        <div className="signup_item">
          <a href="#">
            <BiUnlink className="item_icon" />
          </a>
          Community Edition
        </div>
        <div className="signup_item">
          <a href="#">
            <BsCheckSquare className="item_icon" />
          </a>
          Sign up
        </div>
      </div>
    </div>
  );
};

export default SignUpButtons;
