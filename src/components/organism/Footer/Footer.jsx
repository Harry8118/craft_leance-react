import React from "react";

import FooterLinks from "components/atom/FooterLinks/FooterLinks";
import { footerLinks } from "data/footerLinks";
import NewsLetterSubScription from "components/atom/Newslettersubsription/NewsLetterSubScription";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <div className="footer__container__content">
          <NewsLetterSubScription />

          {footerLinks.map((element, index) => {
            return (
              <FooterLinks key={index} title={element.title}>
                {element.links.map((link, index) => {
                  return (
                    <li>
                      <a key={index} href={link.url}>
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </FooterLinks>
            );
          })}
        </div>
      </div>

      <div class="subfuoter__row">
        <div class="subfuoter__row__container container">
          <a href="#">CRAFT LEANCE</a>
          <div class="subfuoter__row__container__copyrights-box">
            <p>© Designed by Moin Khan. All Rights Reserved.</p>
            <span>Made by BlueLance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
