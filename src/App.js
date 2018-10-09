import React, { Component } from "react";

import "./App.css";

//import Buttons from "./Buttons";
import Button from "./Button";
import Display from "./Display";

const performCalculation = {
  "/": (firstOperand, secondOperand) => {
    if (secondOperand === 0) {
      return "Invalid operator";
    } else {
      return firstOperand / secondOperand;
    }
  },

  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

  "%": (firstOperand, secondOperand) => (secondOperand / firstOperand) * 100,

  "+/-": (firstOperand, secondOperand) => firstOperand * -1,

  "=": (firstOperand, secondOperand) => secondOperand
};

class App extends Component {
  state = {
    displayValue: "0",
    firstOperand: "0",
    waitingForSecondOperand: false,
    operator: null
  };

  inputDigit(digit) {
    // console.log(digit);
    const newValue = this.state.displayValue;
    // console.log(newValue);

    if (this.state.waitingForSecondOperand === true) {
      this.setState({
        displayValue: digit,
        waitingForSecondOperand: false
      });
    } else {
      if (this.state.displayValue === "0") {
        this.setState({
          displayValue: digit
        });
      } else {
        this.setState({
          displayValue: newValue + digit
        });
      }
    }

    //console.log(this.state.displayValue);
  }

  inputDecimal(dot) {
    //console.log(dot);
    let newValue = this.state.displayValue;

    if (!newValue.includes(dot)) {
      newValue += dot;

      this.setState({
        displayValue: newValue
      });
    }
    //console.log(this.state.displayValue);
  }

  resetCalculator() {
    this.setState({
      displayValue: "0",
      firstOperand: "0",
      waitingForSecondOperand: false,
      operator: null
    });
  }

  handleOperator(nextOperator) {
    const inputValue = this.state.displayValue;
    const newValue = parseFloat(inputValue);
    // console.log(newValue);

    //ako je vec unesen operator i drugi je na true mijenjam operator s novim
    if (this.state.operator && this.state.waitingForSecondOperand) {
      this.setState({
        operator: nextOperator
      });
      return;
    }

    if (this.state.firstOperand === "0") {
      this.setState({
        firstOperand: newValue
      });
    } else if (this.state.operator) {
      const result = performCalculation[this.state.operator](
        this.state.firstOperand,
        newValue
      );

      this.setState({
        displayValue: String(result),
        firstOperand: result
      });
    }

    this.setState({
      waitingForSecondOperand: true,
      operator: nextOperator
    });
  }

  //funkcija za pracenje akcija
  handleInput = event => {
    //console.log(event.target);
    const { target } = event;

    if (!target.matches("button")) {
      return;
    }

    if (target.classList.contains("operator")) {
      //console.log("operator", target.value);
      this.handleOperator(target.value);
      return;
    }

    if (target.classList.contains("decimal")) {
      //console.log("decimal", target.value);
      this.inputDecimal(target.value);
      return;
    }

    if (target.classList.contains("all-clear")) {
      //console.log("all clear", target.value);
      this.resetCalculator();
      return;
    }

    //console.log("digits", target.value);
    this.inputDigit(target.value);
  };
  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.displayValue} />

        <Button onClick={this.handleInput} />
      </div>
    );
  }
}

export default App;
