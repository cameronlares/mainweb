import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click);
  const closedMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      } else{
          setButton(true)
      }
  }

  window.addEventListener('resize', showButton)
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
          TRVL <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closedMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-links" onClick={closedMobileMenu}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closedMobileMenu}>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/signup"
            className="nav-links-mobile"
            onClick={closedMobileMenu}
          >
            Sign Up
          </Link>
        </li>
        </ul>
        {button && <Button buttonStyle = 'btn-mobile'>SIGN UP</Button>}
      </nav>
    </>
  );
}

export default Navbar;
