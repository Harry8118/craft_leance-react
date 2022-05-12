import React from "react";

import Burger from "components/molecules/Headermenu/Burger";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="nav__content">
      <nav className="nav__content__container container">
        <a href="#" className="nav__content__container__logo">
          CARFT LANCE
        </a>
        <Burger />
      </nav>
    </div>
  );
};

export default HeaderMenu;
