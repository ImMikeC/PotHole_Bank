import img from "../img/PHB_logo.png";
import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <Link to="/"><img className="imgLogo" src={img} /></Link>
            <nav ref={navRef}>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <Link to="/municipality"><button className="buttonMuni">Municipality</button></Link>
                <Link to="/people"><button className="buttonPerson">People</button></Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
