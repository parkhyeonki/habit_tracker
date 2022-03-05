import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">
        <i className=""="fa-solid fa-leaf"></i>
      </span>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.habitCount}</span>
    </nav>
  );
};

export default Navbar;
