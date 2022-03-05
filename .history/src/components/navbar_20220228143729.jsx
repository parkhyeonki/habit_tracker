import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">
        <i class="fa-solid fa-leaf"></i>
      </span>
      <span>Habit Tracker</span>
      <span className="navbar-count">0</span>
    </nav>
  );
};

export default Navbar;
