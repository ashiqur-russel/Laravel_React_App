import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { StateContext } from "../context/contextProvider";
const Main = () => {
  const { user, token } = useContext(StateContext);
  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
