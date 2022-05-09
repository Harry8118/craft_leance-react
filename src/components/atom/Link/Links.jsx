import React from "react";

import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import "./Links.scss";

const Links = () => {
  const socialIcons = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaGoogle /> },
    { id: 4, icon: <FaLinkedinIn /> },
  ];

  return (
    <ul className="header__social-icon">
      {socialIcons.map((icons) => {
        return (
          <li key={icons.id}>
            <a href="">{icons.icon} </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
