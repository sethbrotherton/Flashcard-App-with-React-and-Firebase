import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h2>React and Firestore Flashcards App</h2>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/practice" activeClassName="selected">
          Practice
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
