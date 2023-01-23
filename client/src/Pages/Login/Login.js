import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={loginHandler}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to={"/register"}>Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
