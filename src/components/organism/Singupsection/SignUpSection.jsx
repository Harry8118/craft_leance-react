import React from "react";
import image from "../../../assets/signupbg.png";
import SignUpbox from "../../molecule/Singupbox/SignUpbox";
import SignUpButtons from "../../molecule/Singupbuttons/SignUpButtons";
import "./SignUpSection.scss";

const SignUpSection = () => {
  return (
    <section className="signUpSection">
      <div className="signup_container">
        <img src={image} alt={"bgImage"}></img>
        <div className="signUp_mask"></div>
        <SignUpbox />
        <SignUpButtons />
      </div>
    </section>
  );
};

export default SignUpSection;
