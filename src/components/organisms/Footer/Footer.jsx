import React from "react";

import FooterLinks from "components/atoms/FooterLinks/FooterLinks";
import { footerLinks } from "data/footerLinks";
import NewsLetterSubScription from "components/atoms/Newslettersubsription/NewsLetterSubScription";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <div className="footer__container__content">
          <NewsLetterSubScription />

          {footerLinks.map((element) => {
            return (
              <FooterLinks key={element.id} title={element.title}>
                {element.links.map((link) => {
                  return (
                    <li key={link.id}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  );
                })}
              </FooterLinks>
            );
          })}
        </div>
      </div>

      <div className="subfuoter__row">
        <div className="subfuoter__row__container container">
          <a href="#">CRAFT LEANCE</a>
          <div className="subfuoter__row__container__copyrights-box">
            <p>© Designed by Moin Khan. All Rights Reserved.</p>
            <span>Made by BlueLance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
