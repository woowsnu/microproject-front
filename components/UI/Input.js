import React from 'react';

const Input = (props) => {
  return (
    <input type={ props.type || "text" } onClick={props.onClick} /> )
}

export default Input
