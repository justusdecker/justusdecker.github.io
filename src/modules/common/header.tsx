import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css'
import { Canvas } from "./canvas";
const Header: React.FC = () => {
  return (
    <header id="head">
      <div className="head-bg"></div>
      <div id="head-text">
        <h1>Justus Decker</h1>
        <h2>Handwerker & Techniker</h2>

        <nav className="nav-bar">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Start
          </NavLink>
          

          
          <div className="dropdown">
            <span className="dropbtn">Über ▾</span>
            <div className="dropdown-content">
              <NavLink to="/contact">Kontakt</NavLink>
              <NavLink to="/cv">CV</NavLink>
              <NavLink to="/certificates">Zertifikate</NavLink>
            </div>
          </div>
          <NavLink 
            to="/tools"
          >
            Tools
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;