import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Courses from "../components/Courses";
import Products from "../components/Products";
import Store from "../components/Store";
import UseStatePractice from "../components/UseStatePractice";
import UseStatePractice2 from "../components/UseStatePractice2";
import UseStatePractice3 from "../components/UseStatePractice3";
import NotfoundPage from "../components/NotfoundPage";
import UseEffectPractice from "../components/UseEffectPractice";
import About2 from "../components/About2";
import About3 from "../components/About3";

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello from home routes</div>}></Route>

        <Route path="/about" element={<Outlet />}>
          <Route index element={<About></About>}></Route>
          <Route path="about2" element={<About2 />}></Route>
          <Route path="about3" element={<About3 />}></Route>
        </Route>

        <Route
          path="/products"
          element={<Products CourseName="MERN STACK" price="15,000"></Products>}
        ></Route>

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

        <Route path="*" element={<NotfoundPage />}></Route>

        <Route
          path="useeffect"
          element={<UseEffectPractice></UseEffectPractice>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
