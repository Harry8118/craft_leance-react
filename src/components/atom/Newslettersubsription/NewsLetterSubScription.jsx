import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./NewsLetterSubscription.scss";

const Newslettersubscription = () => {
  return (
    <div className="footer_content-item">
      <h4 className="item_title">Newsletter</h4>
      <p>
        Insights await in your company's data. Bring them into focus with
        BlueLance.
      </p>
      <div className="footer_content_email-box footer_form">
        <input type="email" placeholder="enter your email" />
        <button className="footer_form-btn">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Newslettersubscription;
