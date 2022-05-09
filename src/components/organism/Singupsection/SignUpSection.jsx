import React from "react";

import SignUpbox from "components/molecule/Singupbox/SignUpbox";
import SignUpButtons from "components/molecule/Singupbuttons/SignUpButtons";
import "./SignUpSection.scss";

const SignUpSection = () => {
  return (
    <section className="signup__section">
      <div className="signup__container">
        <div className="signup__mask"></div>
        <SignUpbox />
        <SignUpButtons />
      </div>
    </section>
  );
};

export default SignUpSection;
