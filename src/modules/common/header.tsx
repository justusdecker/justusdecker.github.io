import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css'
const Header: React.FC = () => {
  return (
    <header id="head">
      <div className="head-bg"></div>

      <img 
        id="profile" 
        src="https://avatars.githubusercontent.com/u/200506279?v=4" 
        alt="Justus Decker Profilbild" 
      />
      
      <div id="head-text">
        <h1>Justus Decker</h1>
        <h2>Handwerk, Programmierung, Kunst und bald auch Elektronik</h2>
        <p>26 Jahre alt. Handwerklich und technisch versiert, bastelt gerne alles selber, just do it!</p>

        <nav className="nav-bar">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Start
          </NavLink>

          <div className="dropdown">
            <span className="dropbtn">Portfolio ▾</span>
            <div className="dropdown-content">
              <NavLink to="/portfolio/craft">Handwerk</NavLink>
              <NavLink to="/portfolio/dev">Software</NavLink>
              <NavLink to="/portfolio/art">Kunst</NavLink>
            </div>
          </div>

          <NavLink 
            to="/blog" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Blog
          </NavLink>

          
          <NavLink to="/contact">Kontakt</NavLink>
          <NavLink to="/training-electrician">Umschulung Elektroniker</NavLink>
          <div className="dropdown">
            <span className="dropbtn">Umschulung Elektroniker ▾</span>
            <div className="dropdown-content">
              <NavLink to="/training-electrician/weekly-summary">Wochen-Zusammenfassung</NavLink>
              <NavLink to="/training-electrician/monthly-summary">Monat-Zusammenfassung</NavLink>
              <NavLink to="/training-electrician/quarterly-summary">Quartal Zusammenfassung</NavLink>
              <NavLink to="/training-electrician/exam-preperation">Prüfungsvorbereitung</NavLink>
              <NavLink to="/training-electrician/glossar">Glossar</NavLink>
              <NavLink to="/training-electrician/laws">Gesetze</NavLink>
              <NavLink to="/training-electrician/formulars-math">Matheformeln</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;