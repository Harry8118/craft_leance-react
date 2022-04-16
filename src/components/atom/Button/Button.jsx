import React from "react";
import "./Button.scss";

const Button = ({ className, title }) => {
  return <button className={className}>{title}</button>;
};

export default Button;
