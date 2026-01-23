import React from "react";
import { useState } from "react";

const UseStatePractice2 = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show == true && <img src="/vite.svg" />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default UseStatePractice2;
