import React from "react";
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import "./headercontact.scss";

const HeaderContact = () => {
  return (
    <ul className="header_contact">
      <li>
        <a href="tel:+44 99151012545">
          <BsTelephoneFill /> +44 99151012545
        </a>
      </li>
      <li>
        <a href="mailto:contact@bluelance.com">
          <HiMail /> contact@bluelance.com
        </a>
      </li>
    </ul>
  );
};

export default HeaderContact;
