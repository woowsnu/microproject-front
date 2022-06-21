import React from "react";
import styled from "styled-components";
import color from "../../styles/colors";

const Button = (props) => {
  return <Btn type={ props.type || "button" } onClick={props.onClick}>{props.children}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 11px 0;
  color: ${color.white};
  background-color: ${color.blue};
  border: 0;
  border-radius: 5px;
  font-size: 20px;

  :hover  {
    background-color: ${color.blue2};
  }
`;
