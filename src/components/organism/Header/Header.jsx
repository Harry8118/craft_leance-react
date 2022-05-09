import React from "react";

import Links from "components/atom/Link/Links";
import HeaderContact from "components/molecule/Headercontact/HeaderContact";
import HeaderMenu from "components/molecule/Headermenu/HeaderMenu";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__top-black ">
        <div className="header__top-black__row container">
          <Links />
          <HeaderContact />
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
