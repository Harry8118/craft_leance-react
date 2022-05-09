import React from "react";

import Form from "components/atom/Form/Form";
import "./SubscriptionSection.scss";

const SubScriptionSection = () => {
  return (
    <section className="form__section">
      <div className="form__section__container container">
        <div className="form__section__container__box">
          <Form />
        </div>
        <div className="form__section__container__bottomtxt">
          <span>
            By clicking Use it free, you agree to the Power BI Terms of
          </span>
        </div>
      </div>
    </section>
  );
};

export default SubScriptionSection;
