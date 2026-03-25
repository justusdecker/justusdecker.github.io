import { Link, type RouteObject } from 'react-router-dom';

import Header from '../common/header';
import '../common/ibox_and_topics.css'
import './home.css';
import '../common/msgbox.css';

const skills = [
    {
        startdate: "01.01.2013",
        content: "🖥️"
    },
    {
        startdate: "01.05.2021",
        content: "⌨️"
    },
    {
        startdate: "01.05.2016",
        content: "✒️​"
    },
    {
        startdate: "01.08.2021",
        content: "🎵​"
    },
    {
        startdate: "01.08.2012",
        content: "🔨​"
    },
    {
        startdate: "01.08.2012",
        content: "🪵"
    },
    {
        startdate: "01.08.2018",
        content: "🪨"
    },
    {
        startdate: "01.08.2012",
        content: "🗜️"
    }

]

const getExperience = (contentName: string) => {
  const skill = skills.find(s => s.content === contentName);
  if (!skill) return "";

  const [day, month, year] = skill.startdate.split('.').map(Number);
  const startDate = new Date(year, month - 1, day);
  const today = new Date();
  
  let years = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  
  // Korrektur, falls der Monatstag im aktuellen Jahr noch nicht erreicht wurde
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }

  return years > 0 ? `${years}` : `${years}`;
};

export const homeRoutes: RouteObject = {
  path: '/home',
  element: (
    <>
        <Header />
        <div className="warn">
            Aktuell wird hier noch umgebaut, daher sind einige Seiten möglicherweise unvollständig oder nicht erreichbar! <br />
        </div>
        <div className="default">
            <h1>Moin,</h1>
            <h2>ich heiße Justus</h2>

            <div>
                <h3>Prorammierer</h3>
                <h3>Handwerker</h3>
                <h3>Zeichner</h3>
                <h3>Musiker</h3>
                <h3></h3>
            </div>
            Ich bin jemand der gerne anpackt wo es gerade Bedarf gibt. 
            Handwerk, Programmierung und Künstlerei sind meine Leidenschaft.
            Mit über zehn Jahren IT Erfahrung, 5 Jahre Python und andere Programmiersprachen sowie meiner Weiterbildung bei der Masterschool, bin ich technisch gerüstet für jede Aufgabe im Softwarebereich.
            Seit dem ich denken kann bastle, zerlege und schraube an allem möglichen herum.
            Schlussendlich noch meine "künstlerische Ader", die ich gerne für Karikaturen und Beispielszeichnungen verwende.
        
            Zusammengefasst könnte man mich als technischer Hausmeister bezeichnen.
        </div>
        <div className='experience'>
            {skills.map((lang, i) => (
            <span>
                <div className="front"><h1 id='new-font-size'>{lang.content}</h1></div>
                <div className="back"><h1>{getExperience(lang.content)}</h1></div>
            </span>
            
            ))}
            
        </div>
        <p>* Alle Angaben in Jahren</p>

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
    </>
  ),
};