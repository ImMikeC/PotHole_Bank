import img from "../img/PHB_logo.png";
import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
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
                <Link to="/municipality"><Button className={"buttonMuni"} text={"Municipality"} /></Link>
                <Link to="/people"><Button className={"buttonPeople"} text={"People"} /></Link>
                <Button className={"nav-btn nav-close-btn"} text={<FaTimes />} onClick={showNavbar} />
            </nav>
            <Button className={"nav-btn"} text={<FaBars />} onClick={showNavbar} />
        </header>
    );
}

export default Navbar;
