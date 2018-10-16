import React from "react";

const actions = props => {
  const actionsArray = ["AC", "+/-", "."];

  return (
    <div>
      {actionsArray.map(action => {
        if (action === "AC") {
          return (
            <button
              className="all-clear"
              value={action}
              onClick={props.onClick}
              key={action}
            >
              {action}
            </button>
          );
        } else if (action === "+/-") {
          return (
            <button
              className="alg-sign"
              key={action}
              value={action}
              onClick={props.onClick}
            >
              {action}
            </button>
          );
        } else if (action === ".") {
          return (
            <button
              className="decimal"
              key={action}
              value={action}
              onClick={props.onClick}
            >
              {action}
            </button>
          );
        }
      })}
    </div>
  );
};

export default actions;
