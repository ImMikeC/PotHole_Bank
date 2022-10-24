import img from "../img/PHB_logo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/login">
                Log In
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/municipality">
                <Button
                  className="btn btn-outline-success"
                  text={"Municipality"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/people">
                <Button className="btn btn-outline-primary" text={"People"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
