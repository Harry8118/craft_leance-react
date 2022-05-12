import React from "react";
import SubScribeBtn from "components/atoms/Button/SubScribeBtn";
import "./Form.scss";

const Form = () => {
  return (
    <form action="#">
      <input type="email" name="email" placeholder="Enter your email addres" />
      <SubScribeBtn />
    </form>
  );
};

export default Form;
