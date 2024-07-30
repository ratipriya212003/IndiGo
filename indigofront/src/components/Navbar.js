import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={Logo} alt="not avail" />
          <h2>IndiGo</h2>
        </div>

        <div className="navbar_menu" id="navbar_menu">
          <Link activeClass="active" to="/" className="navbar_item">
            Home
          </Link>
          <Link activeClass="active" to="/search" className="navbar_item">
            Flight
          </Link>
          <Link activeClass="active" to="/login" className="navbar_item">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;