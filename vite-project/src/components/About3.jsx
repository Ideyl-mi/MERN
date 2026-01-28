import React from "react";

const About3 = () => {
  const getLocalStorageData = localStorage.getItem("name");
  console.log(getLocalStorageData);

  const data = sessionStorage.getItem("age");
  return (
    <div>
      {getLocalStorageData}
      {data}
    </div>
  );
};

export default About3;
