import React from "react";
import { NavLink } from "react-router";

const Homepage = () => {
  return (
    <div>
      Homepage
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default Homepage;
