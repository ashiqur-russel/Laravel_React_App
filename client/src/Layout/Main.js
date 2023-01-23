import React, { useContext } from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { StateContext } from "../context/ContextProvider";
const Main = () => {
  const { user, token } = useContext(StateContext);
  /*  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  } */

  const logoutHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id="defaultLayout">
        <aside className="sidebar">
          <div className="btngroup">
            <div className="btn">
              <Link to={"/dashboard"}>Dashboard</Link>
            </div>
            <div className="btn">
              <Link to={"/users"}>Users</Link>
            </div>
            <div className="btn">
              <Link to={"/"}>Home</Link>
            </div>
          </div>
        </aside>
        <div className="content">
          <header>
            <div>Header</div>
            <div>
              {user.name}{" "}
              <Link to={""} onClick={logoutHandler} className="btn-logout">
                Logout
              </Link>
            </div>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
