import React from "react";
import { useState } from "react";

const UseStatePractice3 = () => {
  const [value, setValue] = useState("password");
  return (
    <div>
      <input type={value}></input>
      <button
        onClick={() => {
          setValue("text");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setValue("password");
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseStatePractice3;
