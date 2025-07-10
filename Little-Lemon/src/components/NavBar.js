//   NavBar.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import "./NavBar.css";
import logo from "./assets/LLHorizontal.png";


function NavBar() {
  const [showNavBar, setShowNavBar] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavBar(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`horizontal-nav`}>
      <div className="logo-container">
        <NavLink to="/">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        </NavLink>
      </div>
    <ul className="nav-links">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/specials">Specials</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/onlineordering">Order</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/reservationstepone">Reservation</NavLink></li>
      </ul>
      </nav>
    );
  }


export default NavBar;
