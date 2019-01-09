import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/practice">Practice</Link>
      </div>
    </nav>
  );
};

export default Navbar;
