import React from "react";
import "../styles/header.css"; // Make sure to style the header accordingly.

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="brand-name">
          <span className="hostel">Hostel</span>
          <span className="hunt">Hunt</span>
        </h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/home" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-item">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="auth-button">
        <a href="/" className="login-button">
          Logout
        </a>
      </div>
    </header>
  );
};

export default Header;
