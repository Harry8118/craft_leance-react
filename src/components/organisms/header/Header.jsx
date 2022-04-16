import React from "react";
import Links from "../../atoms/link/Links";
import HeaderContact from "../../molecules/headercontact/HeaderContact";
import HeaderMenu from "../../molecules/headermenu/HeaderMenu";
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
