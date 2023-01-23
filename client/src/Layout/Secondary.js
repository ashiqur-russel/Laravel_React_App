import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/contextProvider";

const Secondary = () => {
  const { token } = useContext(StateContext);
  if (token) {
    return <Navigate to={"/users"}></Navigate>;
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Secondary;
