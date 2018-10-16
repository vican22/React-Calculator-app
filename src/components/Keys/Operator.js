import React from "react";

const operator = props => {
  const operators = ["+", "-", "/", "*", "="];

  return (
    <div>
      {operators.map(operator => {
        if (operator !== "=") {
          return (
            <button
              className="operator"
              type="button"
              value={operator}
              key={operator}
              onClick={props.onClick}
            >
              {operator}
            </button>
          );
        } else {
          return (
            <button
              className="equal-sign operator"
              type="button"
              value={operator}
              key={operator}
              onClick={props.onClick}
            >
              {operator}
            </button>
          );
        }
      })}
    </div>
  );
};

export default operator;
