import React from "react";
import { Link } from "react-router-dom";

const Home = ({ message }) => {
  return (
    <div>
      <h1> {message}</h1>
      <Link to="/generateinvoice">
        <button> Generate Invoice</button>
      </Link>
    </div>
  );
};

export default Home;
