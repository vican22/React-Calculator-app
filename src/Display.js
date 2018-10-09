import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  render() {
    return (
      <input
        type="text"
        className="calculator-screen"
        value={this.props.value}
        disabled
      />
    );
  }
}

export default Display;
