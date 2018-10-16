import React from "react";
import "./Display.css";

const display = props => {
  return (
    <input
      type="text"
      className="calculator-screen"
      value={props.value}
      disabled
    />
  );
};

export default display;
