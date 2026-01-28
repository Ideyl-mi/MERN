import React from "react";

const Products = (props) => {
  return (
    <div>
      {props.price} is the price of {props.CourseName} course{" "}
    </div>
  );
};

export default Products;
