import { Link, type RouteObject } from 'react-router-dom';

import Header from '../common/header';
import '../common/listed-items-blog-style.css';
import './home.css';
import '../common/msgbox.css';
import '../common/loading.css';
import { FileLoader } from '../common/fileLoader';
import { GitHubRawBaseUrl } from '../common/constants';
import { MsgBox } from '../common/msgbox';
import PortfolioIndex from '../portfolio/common/portfolio';
import { Canvas } from '../common/canvas';

const skills = [
  { startdate: "01.01.2013", icon: "🖥️", id: "it.txt" },
  { startdate: "01.05.2021", icon: "⌨️", id: "code.txt" },
  { startdate: "01.05.2016", icon: "✒️​", id: "art.txt" },
  { startdate: "01.08.2021", icon: "🎵​", id: "music.txt" },
  { startdate: "01.08.2012", icon: "🔨​", id: "craft.txt" },
  { startdate: "01.08.2012", icon: "🪵", id: "wood.txt" },
  { startdate: "01.08.2018", icon: "🪨", id: "....txt" },
  { startdate: "01.08.2012", icon: "🗜️", id: "metal.txt" }
];

const getExperience = (contentName: string) => {
  const skill = skills.find(s => s.icon === contentName);
  if (!skill) return "";

  const [day, month, year] = skill.startdate.split('.').map(Number);
  const startDate = new Date(year, month - 1, day);
  const today = new Date();
  
  let years = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }

  return years > 0 ? `${years} Jahre` : `${years} Jahr`;
};

// 1. NEU: Die ausgelagerte Komponente für die Home-Seite
const HomeComponent = () => {

  // Wenn fertig geladen, zeigen wir deinen gewohnten Content
  return (
    <>
      <Header />
      <MsgBox type='build' text = 'Aktuell wird hier noch umgebaut, daher sind einige Seiten möglicherweise unvollständig oder nicht erreichbar! '></MsgBox>
      <Canvas>
        <>
          <h1>Moin,</h1>
        <h2>ich heiße Justus</h2>

        <p>
          Ich bin jemand der gerne anpackt wo es gerade Bedarf gibt. 
        Handwerk, Programmierung und Künstlerei sind meine Leidenschaft.
        Mit über zehn Jahren IT Erfahrung, 5 Jahre Python und andere Programmiersprachen sowie meiner Weiterbildung bei der Masterschool, bin ich technisch gerüstet für jede Aufgabe im Softwarebereich.
        Seit dem ich denken kann bastle, zerlege und schraube an allem möglichen herum.
        Schlussendlich noch meine "künstlerische Ader", die ich gerne für Karikaturen und Beispielszeichnungen verwende.
      
        Zusammengefasst könnte man mich als technischer Hausmeister bezeichnen.
        </p>
        <img 
          id="profile" 
          src="https://avatars.githubusercontent.com/u/200506279?v=4" 
          alt="Justus Decker Profilbild" 
        />
        </>
      </Canvas>

      <Canvas>

        <div className='experience'>
          {skills.map((lang, index) => (
            <span className={`msgb-default msgb-inf ${(index % 2) ? 'left-rot' : 'right-rot'}`} key={index}>

              <h1 id='new-font-size'>{lang.icon}</h1>
              
              <div>
                <h1>{getExperience(lang.icon)}</h1>
                <FileLoader url={`${GitHubRawBaseUrl}webpage-data/main/home/${lang.id}`}/>
              </div>
            </span>
          ))}

      </div>
      </Canvas>

        
        
      <Canvas>
        <PortfolioIndex category='art'></PortfolioIndex>
        <PortfolioIndex category='craft'></PortfolioIndex>
        <PortfolioIndex category='dev'></PortfolioIndex>
      </Canvas>

      
    </>
  );
};

// 2. Deine Route bleibt sauber und nutzt einfach die neue Komponente
export const homeRoutes: RouteObject = {
  path: '/home',
  element: <HomeComponent />,
};