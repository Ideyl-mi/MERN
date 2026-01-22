import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Courses from "../components/Courses";
import Products from "../components/Products";
import Store from "../components/Store";

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello from home routes</div>}></Route>
        <Route
          path="/about"
          element={<About CourseName="MERN STACK" price="15,000"></About>}
        ></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
