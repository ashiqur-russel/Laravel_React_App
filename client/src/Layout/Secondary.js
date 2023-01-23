import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextProvider";

const Secondary = () => {
  const { token } = useContext(StateContext);

  if (token) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Secondary;
