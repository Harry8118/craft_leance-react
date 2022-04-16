import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "./HeaderMenu.scss";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderMenu = () => {
  return (
    <div className="nav_content">
      <Nav className="nav_container container">
        <a href="#" className="logo">
          CARFT LANCE
        </a>
        <Burger />
      </Nav>
    </div>
  );
};

export default HeaderMenu;
