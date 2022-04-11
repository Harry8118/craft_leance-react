import React from "react";
import Links from "../../atoms/link/Links";
import HeaderContact from "../../molecules/headercontact/HeaderContact";
import "./header.scss";

const Header = () => {
  return (
    <div className="header_top-black container">
      <Links />
      <HeaderContact />
    </div>
  );
};

export default Header;
