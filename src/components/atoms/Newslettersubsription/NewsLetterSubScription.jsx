import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import "./NewsLetterSubscription.scss";

const Newslettersubscription = () => {
  return (
    <div className="footer__content__item">
      <h4 className="footer__content__item__title newstitle">Newsletter</h4>
      <p>
        Insights await in your company's data. Bring them into focus with
        BlueLance.
      </p>
      <div className="footer__content__item__form">
        <input type="email" placeholder="enter your email" />
        <button>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Newslettersubscription;
