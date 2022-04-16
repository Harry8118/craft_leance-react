import React from "react";
import FooterLinks from "../../atom/FooterLinks/FooterLinks";
import { footerLinks } from "../../../data/footerLinks";
import NewsLetterSubScription from "../../atom/Newslettersubsription/NewsLetterSubScription";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container container">
        <div className="footer_content">
          <NewsLetterSubScription />

          {footerLinks.map((element, index) => {
            return (
              <FooterLinks key={index} title={element.title}>
                {element.links.map((link, index) => {
                  return (
                    <a key={index} href={link.url}>
                      {link.title}
                    </a>
                  );
                })}
              </FooterLinks>
            );
          })}
        </div>
      </div>

      <div class="subfuoter_row">
        <div class="subfuoter_container container">
          <a href="#">CRAFT LEANCE</a>
          <div class="subfooter_copyrights-box">
            <p>© Designed by Moin Khan. All Rights Reserved.</p>
            <span>Made by BlueLance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
