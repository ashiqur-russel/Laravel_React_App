import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
import Users from "../Components/Users/Users";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/users"}></Navigate>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/",
    element: <Secondary></Secondary>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
