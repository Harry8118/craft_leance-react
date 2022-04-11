import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import "./links.scss";
const Links = () => {
  return (
    <ul className="header_social-icon">
      <li>
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaGoogle />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
};

export default Links;
