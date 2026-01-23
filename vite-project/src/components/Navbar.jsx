import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/App.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1>Logo</h1>
      <div className="items">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/courses"}>Courses</NavLink>
        <NavLink to={"/store"}>Store</NavLink>
        <NavLink to={"/UseStatePractice"}>UseState</NavLink>
        <NavLink to={"/UseStatePractice2"}>Image</NavLink>
        <NavLink to={"/UseStatePractice3"}>Password</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
