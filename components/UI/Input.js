import React from "react";
import styled from "styled-components";
import fonts from "../../styles/fonts";

const Input = (props) => {
  return (
    <InputCom type={ props.type || "text" } placeholder={props.placeholder} onChange={props.onChange} value={props.value}/> )
}

export default Input

const InputCom = styled.input`
box-sizing: border-box;
width: 100%;
height: 44px;
padding: 8px;
margin-top: 6px;
font-size: 20px;
border: 1px solid black;
border-radius: 3px;
${fonts.Body2}
`