import React from "react";

import { FaSignInAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./SignUpBox.scss";

const SignUpbox = () => {
  return (
    <div className="signup__box">
      <h2>Community Sign Up</h2>
      <div className="signup__transparent-box">
        <FaSignInAlt className="signup__icon" />
        <div className="signup__content">
          <div className="signup__arrow-box">
            <IoIosArrowUp />
            <IoIosArrowDown />
          </div>
          <h4>SIGNUP PROCES</h4>
          <span>1. User enters email address</span>
          <span>2. Clicks on "Sign up for free"</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpbox;
