import React from "react";
import SubScribeBtn from "../../atoms/button/SubScribeBtn";
import Form from "../../atoms/form/Form";
import "./SubScriptionSection.scss";
const SubScriptionSection = () => {
  return (
    <section className="main_form-section">
      <div className="form_section-container container">
        <div className="form_section-box">
          <Form />
        </div>
        <div className="form_section-bottomtxt">
          <span>
            By clicking Use it free, you agree to the Power BI Terms of
          </span>
        </div>
      </div>
    </section>
  );
};

export default SubScriptionSection;
