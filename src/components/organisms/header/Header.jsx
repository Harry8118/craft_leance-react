import React from "react";
import Links from "../../atoms/link/Links";
import HeaderContact from "../../molecules/headercontact/HeaderContact";
import HeaderMenu from "../../molecules/headermenu/HeaderMenu";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_top-black">
          <Links />
          <HeaderContact />
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
