import React from "react";
import image from "../../../assets/image.png";
import "./FirstSection.scss";

const FirstSection = () => {
  return (
    <section className="first_section">
      <div className="main_section-container container">
        <div className="main_section-textbox">
          <h1>Bring your Big Data to Life With Carft Lance</h1>
          <p>
            Blue Lance transforms your company's data into rich visuals for you
            to collect and organize so you can focus on what matters to you.
            Stay in the know, spot trends as they happen, and push your business
            further.
          </p>
        </div>
        <div className="main_section-image">
          <img src={image} alt={"bgImage"} />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
