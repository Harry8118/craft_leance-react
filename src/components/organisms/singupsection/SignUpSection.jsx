import React from "react";
import image from "../../../assets/signupbg.png";
import SignUpbox from "../../molecules/singupbox/SignUpbox";
import SignUpButtons from "../../molecules/singupbuttons/SignUpButtons";
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
