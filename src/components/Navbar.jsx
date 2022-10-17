import img from "../img/PHB_logo.png";
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../components/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img className="imgLogo" src={img} />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">info</a>
        <button className="buttonMuni">Municipality</button>
        <button className="buttonPerson">People</button>
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
