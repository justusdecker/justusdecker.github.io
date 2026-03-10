import { Link, type RouteObject } from 'react-router-dom';

import Header from '../common/header';
import '../common/ibox_and_topics.css'

export const homeRoutes: RouteObject = {
  path: '/home',
  element: (
    <>
        <Header />
        

        <main id="home-content">
            {/* Linke Spalte: Wer ich bin & was ich mache */}
            <section className="info-box">
                <h3>Schwerpunkte</h3>
                <div className="topic-list">
                <Link to={'/portfolio/dev'}>
                    <div className="topic-item">
                        <strong>💻 Programmierung</strong>
                        <p>Fullstack-Entwicklung mit Fokus auf React, Python und TDD.</p>
                    </div>
                </Link>
                <Link to={'/portfolio/craft'}>
                    <div className="topic-item">
                        <strong>🔨 Handwerk</strong>
                        <p>Holzbau, Metallverarbeitung und Automation im Niedervoltbereich.</p>
                    </div>
                </Link>
                <Link to={'/portfolio/art'}>
                    <div className="topic-item">
                        <strong>🎨 Kunst</strong>
                        <p>Digital Art, Zeichnen & Musik – wenn die Technik auf Ästhetik trifft.</p>
                    </div>
                </Link>
                </div>
            </section>

            {/* Rechte Spalte: Aktueller Status / Stats */}
            
                <aside className="status-box">
                    <Link to={'/contact'}>
                    <h3>Aktueller Status</h3>
                    <div className="status-card">
                    <span>📍 Standort: Emden, Deutschland</span>
                    <span>🛠️ Projekt: Portfolio-Rewrite (React + Vite)</span>
                    <span>⚡ Fokus: Ausbildung / Umschulung - Elektroniker</span>
                    </div>
                    </Link>
                </aside>
        </main>



        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div>Aktuell wird hier noch umgebaut, daher besuche doch einfach mein aktuelles <a href="https://justusdecker.github.io/">Portfolio</a> oder schau auf <a href="https://www.linkedin.com/in/justus-decker/">LinkedIn</a> vorbei.</div>
        </div>
        
    </>
  ),
};