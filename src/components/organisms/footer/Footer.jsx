import React from "react";
import NewsLetterSubScription from "../../atoms/newslettersubsription/NewsLetterSubScription";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container container">
        <div className="footer_content">
          <NewsLetterSubScription />
          <div className="footer_content-item">
            <h4 className="item_title">Quck Links</h4>
            <a href="#">POWER BI DESKTOP</a>
            <a href="#">MOBILE</a>
            <a href="#">SEE ALL DOWNLOADS</a>
            <a href="#">POWER BI DESKTOP</a>
            <a href="#">MOBILE</a>
            <a href="#">SEE ALL DOWNLOADS</a>
          </div>
          <div className="footer_content-item">
            <h4 className="item_title">Quck Links</h4>
            <a href="#">POWER BI DESKTOP</a>
            <a href="#">MOBILE</a>
            <a href="#">SEE ALL DOWNLOADS</a>
            <a href="#">POWER BI DESKTOP</a>
            <a href="#">MOBILE</a>
            <a href="#">SEE ALL DOWNLOADS</a>
          </div>
          <div className="footer_content-item">
            <h4 className="item_title">Quck Links</h4>
            <a href="#">POWER BI DESKTOP</a>
            <a href="#">MOBILE</a>
            <a href="#">SEE ALL DOWNLOADS</a>
            <a href="#">POWER BI DESKTOP</a>
            <a href="#">MOBILE</a>
            <a href="#">SEE ALL DOWNLOADS</a>
          </div>
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
