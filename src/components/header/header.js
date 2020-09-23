import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/" className="link">
          <h1>Shobha</h1>{" "}
        </Link>
      </div>
      <div className="list">
        <div style={{ marginLeft: "20px" }} className="link">
          Sign up
        </div>
        <div style={{ marginLeft: "20px" }} className="link">
          <Link to="/signin"> Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
