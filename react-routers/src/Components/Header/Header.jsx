import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Fixed Header</h1>
      <nav className="flex gap-5 items-center justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/customers">Customers</NavLink>
      </nav>
    </div>
  );
};

export default Header;
