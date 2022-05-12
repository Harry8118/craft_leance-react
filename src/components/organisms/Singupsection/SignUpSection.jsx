import React from "react";

import SignUpbox from "components/molecules/Singupbox/SignUpbox";
import SignUpButtons from "components/molecules/Singupbuttons/SignUpButtons";
import "./SignUpSection.scss";

const SignUpSection = () => {
  return (
    <section className="signup__section">
      <div className="signup__section__mask"></div>
      <SignUpbox />
      <SignUpButtons />
    </section>
  );
};

export default SignUpSection;
