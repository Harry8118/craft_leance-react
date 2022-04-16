import React from "react";
import Links from "../../atom/Link/Links";
import HeaderContact from "../../molecule/Headercontact/HeaderContact";
import HeaderMenu from "../../molecule/Headermenu/HeaderMenu";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header_top-black ">
        <div className="top_black-row container">
          <Links />
          <HeaderContact />
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
