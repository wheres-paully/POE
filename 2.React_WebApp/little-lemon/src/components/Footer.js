// Footer.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "./assets/LLVertical.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="footer">
        <div className="footer-columns">
        <div className="footer-column horizontal-group centered-logo-group">
        <div className="footer-logo inline-logo">
      <img src={logo} alt="Little Lemon Logo" />
        </div>
      </div>
      <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink ></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservation">Reservation</NavLink></li>
            <li><NavLink to="/order">Order Online</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>1234 Made Up Street</li>
            <li>Chicago, IL 60601</li>
            <li>(312) 555-9876</li>
            <li>contact@littlelemonrestaurant.com</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Hello Peter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-rights">
        <small>© {currentYear} Little Lemon. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
