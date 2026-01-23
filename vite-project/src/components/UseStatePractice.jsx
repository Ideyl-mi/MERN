import React from "react";
import { useState } from "react";

const UseStatePractice = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      {number}
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseStatePractice;
