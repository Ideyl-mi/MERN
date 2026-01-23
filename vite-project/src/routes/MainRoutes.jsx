import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Courses from "../components/Courses";
import Products from "../components/Products";
import Store from "../components/Store";
import UseStatePractice from "../components/UseStatePractice";
import UseStatePractice2 from "../components/UseStatePractice2";
import UseStatePractice3 from "../components/UseStatePractice3";

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
        <Route
          path="/UseStatePractice"
          element={<UseStatePractice></UseStatePractice>}
        ></Route>
        <Route
          path="/UseStatePractice2"
          element={<UseStatePractice2></UseStatePractice2>}
        ></Route>
        <Route
          path="/UseStatePractice3"
          element={<UseStatePractice3></UseStatePractice3>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
