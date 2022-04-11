import React from "react";
import Header from "../organisms/header/Header";
import HeaderMenu from "../molecules/headermenu/HeaderMenu";

import "./page.scss";

const Page = () => {
  return (
    <header>
      <Header />
      <HeaderMenu />
    </header>
  );
};

export default Page;
