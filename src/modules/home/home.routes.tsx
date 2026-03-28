import { Link, type RouteObject } from 'react-router-dom';

import Header from '../common/header';
import '../common/listed-items-blog-style.css'
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
            {skills.map((lang) => (
            <span>
                <div className="front"><h1 id='new-font-size'>{lang.content}</h1></div>
                <div className="back"><h1>{getExperience(lang.content)}</h1></div>
            </span>
            
            ))}
            
        </div>
        <p>* Alle Angaben in Jahren</p>
        
        

            {/* Linke Spalte: Wer ich bin & was ich mache */}
            <div className="tile-list">
                <Link to={'/portfolio/dev'}>
                    <div className="tile-entry">
                        <strong>💻 Programmierung</strong>
                        <p>Fullstack-Entwicklung mit Fokus auf React, Python und TDD.</p>
                    </div>
                </Link>
                <Link to={'/portfolio/craft'}>
                    <div className="tile-entry">
                        <strong>🔨 Handwerk</strong>
                        <p>Holzbau, Metallverarbeitung und Automation im Niedervoltbereich.</p>
                    </div>
                </Link>
                <Link to={'/portfolio/art'}>
                    <div className="tile-entry">
                        <strong>🎨 Kunst</strong>
                        <p>Digital Art, Zeichnen & Musik – wenn die Technik auf Ästhetik trifft.</p>
                    </div>
                </Link>
                </div>
    </>
  ),
};