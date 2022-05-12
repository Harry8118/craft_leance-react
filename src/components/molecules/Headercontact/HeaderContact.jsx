import React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";

import "./HeaderContact.scss";

const HeaderContact = () => {
  return (
    <ul className="header__contact">
      <li>
        <a href="tel:+44 99151012545">
          <BsTelephoneFill /> +44 99151012545
        </a>
      </li>
      <li>
        <a href="mailto:contact@bluelance.com">
          <FiMail /> contact@bluelance.com
        </a>
      </li>
    </ul>
  );
};

export default HeaderContact;
