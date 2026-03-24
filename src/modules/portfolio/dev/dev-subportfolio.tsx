import PortfolioIndex from '../common/portfolio';
import React, { useRef, useState } from 'react';

const PortfolioDevDetail: React.FC = () => {
  // State für die Anzeige: false = nur 1 Reihe, true = alle
  const [isExpanded, setIsExpanded] = useState(false);
  
  const cardRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const languages = [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: "Python", icon: "python"},
    { name: "HTML", icon: "html5"},
    { name: "CSS", icon: "css3"},
    { name: "Java", icon: "java"},
    { name: "C", icon: "c"},
    { name: "Kotlin", icon: "kotlin"},
    { name: "React", icon: "react"},
    { name: "GitHub Actions", icon: "githubactions"},
    { name: "Flask", icon: "flask"},
    { name: "Fusion", icon: "fusion"},
    { name: "GitHub", icon: "github"},
    { name: "Git", icon: "git"},
    { name: "Gitkraken", icon: "gitkraken"},
    { name: "GitLab", icon: "gitlab"},
    { name: "Json", icon: "json"},
    { name: "LaTeX", icon: "latex"},
    { name: "Markdown", icon: "markdown"},
    { name: "NextJS", icon: "nextjs"},
    { name: "npm", icon: "npm"},
    { name: "Powershell", icon: "powershell"},
    { name: "pypi", icon: "pypi"},
    { name: "sqlalcemy", icon: "sqlalchemy"},
    { name: "sqlite", icon: "sqlite"},
    { name: "Rust", icon: "rust"},
  ];
  const editors = [
    { name: "VSCode", icon: "vscode"},
    { name: "Visual Studio", icon: "visualstudio"},
    { name: "Eclipse", icon: "eclipse"},
    { name: "Vim", icon: "vim"},
    { name: "IntelliJ", icon: "intellij"},
  ]

  // Logik: Wenn nicht ausgeklappt, zeige nur die ersten 3 (erste Reihe)
  const visibleLanguages = isExpanded ? languages : languages.slice(0, 5);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div className="portfolio-dev-wrapper">
      
      <div className="centered"><h1>Skills</h1></div>
      <div className="langs">
        {visibleLanguages.map((lang, i) => (
          <span
            key={lang.name}
            ref={(el) => { cardRefs.current[i] = el; }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="lang-card"
          >
            <img src={sUrl + `${ lang.icon }/${ lang.icon }-original.svg`} alt={lang.name} style={{ pointerEvents: 'none' }} />
            {lang.name}
          </span>
        ))}
      </div>

      

      {/* Button zum Umschalten */}
      <div className="centered"><button 
        className="neo-btn" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Weniger anzeigen' : 'Alle anzeigen'}
      </button></div>
      <div className="centered"><h1>Programme</h1></div>
      <div className="langs">
        {editors.map((editor, i) => (
          <span
            key={editor.name}
            ref={(el) => { cardRefs.current[visibleLanguages.length + i] = el; }}
            onMouseMove={(e) => handleMouseMove(e, visibleLanguages.length + i)}
            onMouseLeave={() => handleMouseLeave(visibleLanguages.length + i)}
            className="lang-card"
          >
            <img src={sUrl + `${ editor.icon }/${ editor.icon }-original.svg`} alt={editor.name} style={{ pointerEvents: 'none' }} />
            {editor.name}
          </span>
        ))}
      </div>

      <div className="portfolio-detail">
        <PortfolioIndex category="dev" />
      </div>
    </div>
  );
};

export default PortfolioDevDetail;