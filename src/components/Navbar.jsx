import img from "../img/PHB_logo1.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="imgLogo" src={img} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item mt-2">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mt-2">
              <NavLink className="nav-link active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mt-2">
              <NavLink className="nav-link active" to="/login">
                Log In
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/municipality">
                <Button
                  className="btn btn-outline-primary"
                  text={"Municipality"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/people">
                <Button className="btn btn-outline-success" text={"People"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
