
import { NavLink } from "react-router";
import Login from "../components/Login";

const Homepage = () => {
  return (
    <div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <Login/>
    </div>
  );
};

export default Homepage;
