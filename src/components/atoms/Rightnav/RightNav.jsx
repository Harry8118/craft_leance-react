import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "components/atoms/Button/Button";

const Ul = styled.ul`
  gap: 10px;
  align-items: baseline;
  list-style: none;
  flex-flow: row nowrap;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    font-weight: 400;
    font-size: 12px;
    a {
      color: #000;
    }
  }

  li:hover {
    border-radius: 14px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    transition-duration: 200ms;

    a {
      color: #5db442;
    }
  }
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    align-items: center;
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    right: 0;
    width: 100%;
    padding-top: 100px;
    transition: transform 0.3s ease-in-out;

    li {
      display: flex;
      padding: 5px 10px;
      background: white;
      width: 30%;
      margin-bottom: 5px;
      border-radius: 14px;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1170px) {
    gap: 45px;
    li {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Solutions</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
      <Button title="Sing in" />
    </Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool,
};

RightNav.defaultTypes = {
  open: false,
};

export default RightNav;
