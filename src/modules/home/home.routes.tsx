import { type RouteObject } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './home.css'
import './home-main.css'
import './home-navbar.css'
export const homeRoutes: RouteObject = {
  path: '/home',
  element: (
    <>
        <div id="head">
            <div className="head-bg"></div>

            <img id="profile" src="https://avatars.githubusercontent.com/u/200506279?v=4" />
            <div id="head-text">
                <h1>Justus Decker</h1>
                <h2>Handwerk, Programmierung, Kunst und bald auch Elektronik</h2>
                <p>26 Jahre alt. Handwerklich und technisch versiert, bastelt gerne alles selber, just do it!</p>
                
                <nav className="nav-bar">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Start</NavLink>
                    
                    <div className="dropdown">
                        <span className="dropbtn">Portfolio ▾</span>
                        <div className="dropdown-content">
                            <NavLink to="/portfolio/craft">Handwerk</NavLink>
                            <NavLink to="">---</NavLink>
                            <NavLink to="/portfolio/craft">Metall</NavLink>
                            <NavLink to="/portfolio/craft">Holz</NavLink>
                            <NavLink to="/portfolio/craft">Elektro</NavLink>
                            <NavLink to="/portfolio/dev">Software</NavLink>
                            <NavLink to="/portfolio/art">Kunst</NavLink>
                        </div>
                    </div>
                    
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
                    
                    {/* Der CTA Button */}
                    <NavLink to="mailto:deine@mail.de" className={({ isActive }) => isActive ? 'active' : ''}>Geschäftliche Anfragen</NavLink>
                </nav>
            </div>
            
        </div>
        

        <main id="home-content">
            {/* Linke Spalte: Wer ich bin & was ich mache */}
            <section className="info-box">
                <h3>Schwerpunkte</h3>
                <div className="topic-list">
                <div className="topic-item">
                    <strong>💻 Programmierung</strong>
                    <p>Fullstack-Entwicklung mit Fokus auf React, Python und TDD.</p>
                </div>
                <div className="topic-item">
                    <strong>🔨 Handwerk</strong>
                    <p>Holzbau, Metallverarbeitung und Automation im Niedervoltbereich.</p>
                </div>
                <div className="topic-item">
                    <strong>🎨 Kunst</strong>
                    <p>Digital Art, Zeichnen & Musik – wenn die Technik auf Ästhetik trifft.</p>
                </div>
                </div>
            </section>

            {/* Rechte Spalte: Aktueller Status / Stats */}
            <aside className="status-box">
                <h3>Aktueller Status</h3>
                <div className="status-card">
                <span>📍 Standort: Emden, Deutschland</span>
                <span>🛠️ Projekt: Portfolio-Rewrite (React + Vite)</span>
                <span>⚡ Fokus: Ausbildung / Umschulung - Elektroniker</span>
                </div>
            </aside>
        </main>



        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div>Aktuell wird hier noch umgebaut, daher besuche doch einfach mein aktuelles <a href="https://justusdecker.github.io/">Portfolio</a> oder schau auf <a href="https://www.linkedin.com/in/justus-decker/">LinkedIn</a> vorbei.</div>
        </div>
        
    </>
  ),
};