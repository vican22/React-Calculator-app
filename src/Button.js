import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div className="calculator-keys">
        <button
          onClick={this.props.onClick}
          type="button"
          className="all-clear"
          value="all-clear"
        >
          AC
        </button>

        <button
          onClick={this.props.onClick}
          type="button"
          className="operator"
          value="+/-"
          style={{ backgroundColor: "gray", color: "white" }}
        >
          +/-
        </button>

        <button
          onClick={this.props.onClick}
          type="button"
          className="operator"
          value="%"
          style={{ backgroundColor: "gray", color: "white" }}
        >
          %
        </button>
        <button
          onClick={this.props.onClick}
          type="button"
          className="operator"
          value="/"
        >
          &divide;
        </button>

        <button onClick={this.props.onClick} type="button" value="7">
          7
        </button>
        <button onClick={this.props.onClick} type="button" value="8">
          8
        </button>
        <button onClick={this.props.onClick} type="button" value="9">
          9
        </button>
        <button
          onClick={this.props.onClick}
          type="button"
          className="operator"
          value="*"
        >
          &times;
        </button>

        <button onClick={this.props.onClick} type="button" value="4">
          4
        </button>
        <button onClick={this.props.onClick} type="button" value="5">
          5
        </button>
        <button onClick={this.props.onClick} type="button" value="6">
          6
        </button>
        <button
          onClick={this.props.onClick}
          type="button"
          className="operator"
          value="-"
        >
          -
        </button>

        <button onClick={this.props.onClick} type="button" value="1">
          1
        </button>
        <button onClick={this.props.onClick} type="button" value="2">
          2
        </button>
        <button onClick={this.props.onClick} type="button" value="3">
          3
        </button>
        <button
          onClick={this.props.onClick}
          type="button"
          className="operator"
          value="+"
        >
          +
        </button>

        <button onClick={this.props.onClick} type="button" value="0">
          0
        </button>
        <button
          onClick={this.props.onClick}
          type="button"
          className="decimal"
          value="."
        >
          ,
        </button>

        <button
          onClick={this.props.onClick}
          type="button"
          className="equal-sign operator"
          value="="
        >
          =
        </button>
      </div>
    );
  }
}

export default Button;
