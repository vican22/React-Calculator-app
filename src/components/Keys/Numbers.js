import React from "react";

const numbers = props => {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div>
      {nums.map(num => {
        return (
          <button type="button" onClick={props.onClick} key={num} value={num}>
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default numbers;
