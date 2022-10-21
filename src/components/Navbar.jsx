import img from "../img/PHB_logo.png";
import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img className="imgLogo" src={img} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <Link to="/municipality">
              <Button className={"buttonMuni"} text={"Municipality"} />
            </Link>
            <Link to="/people">
              <Button className={"buttonPeople"} text={"People"} />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
