import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Page is not implemmneted yet...Please Go Back to{" "}
      <Link to={"/"}>
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default NotFound;
