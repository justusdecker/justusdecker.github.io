/*

*/
import { type RouteObject } from 'react-router-dom';
import { BackgroundShader } from '../../components/BackgroundShader';
import SocialLinks from '../../common/code/SocialLinks';
import './portfolio.css';
export const PortfolioHeader = () => {
    return (
        <header>
        <div className="nav-container">
            <a href="#" className="logo">⚡ <span>Justus Decker</span></a>
            <nav>
                <ul>
                    <li><a href="#/#about">Über mich</a></li>
                    <li><a href="/#cv">Lebenslauf</a></li>
                    <li><a href="/#internships">Praktika</a></li>
                    <li><a href="/#projects">Projekte</a></li>
                    <li><a href="/#documents">Dokumente</a></li>
                    <li><a href="/#contact">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

const PortfolioContainer = () => {
    return (
        <div className="container">

        <section id="about" className="hero">
            <img src="https://avatars.githubusercontent.com/u/200506279?v=4" alt="" className='avatar'/>
            <h1>Umschulung zum Elektroniker für Betriebstechnik</h1>
            <p>Willkommen auf meiner digitalen Bewerbungsseite. Als zielstrebiger Umschüler verbinde ich fundiertes handwerkliches Geschick mit analytischem Denken und modernen IT-Kompetenzen (TypeScript, React, Vite).</p>

            <div className="badge-container">
                
                <div className="badge">Hohe Eigeninitiative & Technikbegeisterung</div>
                
                <div className="badge">10 Jahre IT & Programmierungserfahrung</div>
                
                <div className="badge">Teamwork und Kommunikation an höchster Stelle</div>
                
                <div className="badge">Analytisches Denken</div>
                
                <div className="badge">Schnelllerner</div>
                
            </div>

            <div className="badge-container">
                
                <div className="badge">Schwimmen</div>
                
                <div className="badge">Laufen</div>
                
                <div className="badge">Fahrrad fahren</div>
                
                <div className="badge">Programmieren</div>
                
                <div className="badge">Heimwerken</div>
                
                <div className="badge">Mikrocontroller -/ Elektronik basteln</div>
                
                <div className="badge">Tüfteln am E-Scooter und Roller</div>
                
            </div>
            <a href="#contact" className="btn">Anfrage senden</a>
        </section>

        <section id="cv">
            
            <h2>Lebenslauf</h2>
            <div className="grid-2">
                
                <div>
                    <h3>Beruflicher & Schulischer Werdegang</h3>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">April 2026 – Heutig</div>
                        <h4>Umschulung zum Elektroniker für Betriebstechnik</h4>
                        <p>Fundierte theoretische und praktische Ausbildung in den Bereichen Schaltungstechnik, Automatisierung und elektrische Anlagen.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Februar 2025 – April 2026</div>
                        <h4>Weiterbildung zum Backend-Entwickler</h4>
                        <p>Programmieren von Backend-Applikationen, Automationsprogrammen. Lernen von Sicherheitsprinzipien. Fehleranalyse.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Juni 2024 – September 2024</div>
                        <h4>Staplerfahrer</h4>
                        <p>Bereitstellung und Entsorgung im Bereich Lebensmittelherstellung.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">April 2024 – Juni 2024</div>
                        <h4>Weiterbildung zum Auslieferungsfahrer</h4>
                        <p>Erwerb des Führerscheines Klasse B. Lernen von Lagerarten.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">November 2023 – Dezember 2023</div>
                        <h4>Staplerfahrer</h4>
                        <p>Bereitstellung für den Routenzug, Hoch -/ und Bodenregallagerung, Verladung.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Mai 2023 – November 2023</div>
                        <h4>Verkäufer</h4>
                        <p>Warenverräumung, Kundenbedienung, Kassieren und Inventur.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">November 2021 – Mai 2023</div>
                        <h4>Staplerfahrer</h4>
                        <p>Verladung, Umfuhr und Bereitstellung für die Weiterverarbeitung.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">März 2021</div>
                        <h4>Mitarbeiter Industrie</h4>
                        <p>Packen, Qualitätsprüfung, Kommisionierung und Montieren.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Februar 2021 – März 2021</div>
                        <h4>Lagerhelfer</h4>
                        <p>Warenannahme, Warenausgabe und Ablaufkontrolle.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Januar 2021</div>
                        <h4>Mitarbeiter Industrie</h4>
                        <p>Packen, Qualitätsprüfung und Transport.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">August 2020 – Februar 2021</div>
                        <h4>Berufsfachschule Fachrichtung Feinwerkmechaniker</h4>
                        <p>Sägen, feilen, schweißen und löten. Pläne erstellen und lesen.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">August 2019 – Juli 2020</div>
                        <h4>Berufsfachschule Fachrichtung Kraftfahrzeugmechatroniker</h4>
                        <p>Reifenwechsel, Bremsenmontage und elektronische Fehleranalyse.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Dezember 2018</div>
                        <h4>Mitarbeiter Industrie</h4>
                        <p>Entladen von LKW.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Oktober 2018 – November 2018</div>
                        <h4>Mitarbeiter Industrie</h4>
                        <p>Qualitätsprüfung.</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">Juli 2018 – August 2018</div>
                        <h4>Mitarbeiter Industrie</h4>
                        <p>Maschinenbedienung, Kommisionierung und Inventur</p>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-date">August 2017 – Juli 2018</div>
                        <h4>Berufseinstiegsklasse(Hauptschulabschluss) Fachrichtung Metalltechnik</h4>
                        <p>Sägen, feilen, schweißen, drehen, fräsen und löten. Pläne erstellen und lesen.</p>
                    </div>
                    

                    
                </div>

                <div>
                    <h3>Kenntnisse & Fähigkeiten</h3>
                    
                    <div className="skills-group">
                        <h4>Elektro</h4>
                        <div className="tag-list">
                            
                            <span className="tag">Schaltanlagenbau</span>
                            
                            <span className="tag">Löten</span>
                            
                            <span className="tag">defekte Bauteile erkennen, reparieren & tauschen.</span>
                            
                            <span className="tag">SPS: Kleinsteuerung(LOGO!Soft Comfort)</span>
                            
                            <span className="tag">VPS</span>
                            
                            <span className="tag">Dokumentation</span>
                            
                        </div>
                    </div>
                    
                    <div className="skills-group">
                        <h4>Programmierung</h4>
                        <div className="tag-list">
                            
                            <span className="tag">HTML, CSS & TypeScript / JavaScript</span>
                            
                            <span className="tag">Python</span>
                            
                            <span className="tag">Windows Batch</span>
                            
                            <span className="tag">Bash</span>
                            
                            <span className="tag">C, C++ & C# Verständnis</span>
                            
                            <span className="tag">Entwicklung von: Automationsprogrammen, APIs, Videospielen, </span>
                            
                            <span className="tag">Vertraut mit Java & Kotlin</span>
                            
                            <span className="tag">problematische Software erkennen und isolieren</span>
                            
                            <span className="tag">Git, GitHub, GitLab, Git Actions</span>
                            
                            <span className="tag">Visual Studio Code, Eclipse, ACode, IntelliJ IDEA</span>
                            
                            <span className="tag">Sinnvolle Implementation von AI</span>
                            
                            <span className="tag">Cybersicherheit</span>
                            
                            <span className="tag">Optimierung</span>
                            
                            <span className="tag">Schnelle Erstellung von Prototypen und MVPs</span>
                            
                        </div>
                    </div>
                    
                    <div className="skills-group">
                        <h4>Sprachen</h4>
                        <div className="tag-list">
                            
                            <span className="tag">Deutsch (Muttersprache)</span>
                            
                            <span className="tag">Englisch (B1 Niveau, C1 Textverständnis)</span>
                            
                        </div>
                    </div>
                    
                    <div className="skills-group">
                        <h4>Logistik</h4>
                        <div className="tag-list">
                            
                            <span className="tag">Fahrausweis Flurförderzeuge - Stapler bis zu 5 Tonnen</span>
                            
                            <span className="tag">3 Jahre Stapler-Fahrerfahrung</span>
                            
                        </div>
                    </div>
                    
                    <div className="skills-group">
                        <h4>EDV</h4>
                        <div className="tag-list">
                            
                            <span className="tag">Microsoft: Word, Excel, Powerpoint & Teams</span>
                            
                            <span className="tag">LibreOffice & OpenOffice: Writer, Calc & Math</span>
                            
                            <span className="tag">Google: Docs, Sheets, Drive, Gmail, Meet</span>
                            
                            <span className="tag">Slack</span>
                            
                            <span className="tag">Windows, MacOS, Linux & WSL</span>
                            
                            <span className="tag">Windows Terminal</span>
                            
                            <span className="tag">LMMS</span>
                            
                            <span className="tag">Erweiterte Basis: Systemintegration</span>
                            
                            <span className="tag">Sony Vegas 17</span>
                            
                            <span className="tag">Davinci Resolve</span>
                            
                            <span className="tag">Fusion 360</span>
                            
                        </div>
                    </div>
                    
                    <div className="skills-group">
                        <h4>Weiteres im Handwerk</h4>
                        <div className="tag-list">
                            
                            <span className="tag">KFZ</span>
                            
                            <span className="tag">Holzverarbeitung</span>
                            
                            <span className="tag">Metallverarbeitung</span>
                            
                            <span className="tag">Möbelbau</span>
                            
                        </div>
                    </div>
                    
                    <div className="skills-group">
                        <h4>Weiteres</h4>
                        <div className="tag-list">
                            
                            <span className="tag">Führerschein Klasse B</span>
                            
                        </div>
                    </div>
                    

                    
                </div>
            </div>
        </section>

        <section id="internships">
            <h2>Geplantes Praktikum</h2>
            <p>Im Rahmen meiner Umschulung absolviere ich ein sechswöchiges Pflichtpraktikum. Laut Ausbildungsrahmenordnung darf ich dieses in allen elektrotechnischen Berufsfeldern ausüben.</p>
            
            <div className="grid-2 grid-2-margin">
                <div className="card">
                    <h3>Regulärer Zeitraum (Bevorzugt)</h3>
                    <p><strong>24.05.2027 bis zum 02.07.2027</strong> (6 Wochen)</p>
                    <p className='card-text-lower'>Ideal für die nahtlose Einbindung in Ihren betrieblichen Ablauf und tiefere Einblicke in Projekte.</p>
                </div>
                <div className="card">
                    <h3>Flexible Alternative</h3>
                    <p><strong>Verkürzter Zeitraum (2–3 Wochen)</strong> z.B. 24.05. bis 04.06.2027</p>
                    <p className='card-text-lower'>Falls ein durchgängiges Praktikum bei Ihnen nicht möglich ist, bin ich nach Absprache gerne für einen kürzeren Zeitraum flexibel.</p>
                </div>
                
            </div>
        </section>

        <section id="projects">
            <h2>Projekte & Portfolio</h2>
            <p>Ein Einblick in meine bisherigen Arbeiten aus Programmierung, Handwerk und kreativem Schaffen.</p>
            
            <div className="grid-3 grid-3-margin">

                <div className="card">
                    <h3>💻 Programmierung & Web</h3>
                    <p>Entwicklung von Webanwendungen und Tools mit TypeScript, React und Vite. Fokus auf saubere Code-Struktur und UI-Design.</p>
                    <p className='card-text'><strong>Tech:</strong> React, TS, Vite</p>
                </div>

                <div className="card">
                    <h3>🛠️ Handwerk & Technik</h3>
                    <p>Dokumentation handwerklicher Arbeiten, Schaltungsaufbauten, Verteilerverdrahtung und systematisches Troubleshooting.</p>
                    <p className='card-text'><strong>Fokus:</strong> Präzision & Sicherheit</p>
                </div>

                <div className="card">
                    <h3>🎨 Kunstportfolio</h3>
                    <p>Kreative Arbeiten, digitale Gestaltung und visuelle Konzeption als Ausgleich und Schulung für den Sinn für Details.</p>
                    <p className='card-text'><strong>Fokus:</strong> Gestaltung & Ästhetik</p>
                </div>
            </div>
        </section>

        <section id="documents">
            <h2>Dokumente & Nachweise</h2>
            <p>Alle wichtigen Belege für HR und Ausbildungsleiter auf einen Blick:</p>
            
            <ul className="doc-list doc-list-margin">
                
                <li className="doc-item">
                    <span>Lebenslauf</span>
                    <a href="#contact" className="doc-link">Anfordern / Herunterladen</a>
                </li>
                
                <li className="doc-item">
                    <span>Umschulungsnachweis</span>
                    <a href="#contact" className="doc-link">Auf Anfrage verfügbar</a>
                </li>
                
                <li className="doc-item">
                    <span>Praktika (gelistet)</span>
                    <a href="#contact" className="doc-link">Herunterladen</a>
                </li>
                
                <li className="doc-item">
                    <span>Praktikumbeurteilungen</span>
                    <a href="#contact" className="doc-link">Anfordern</a>
                </li>
                
                <li className="doc-item">
                    <span>Nachweis Englisch (EF SET Certificate)</span>
                    <a href="#contact" className="doc-link">Herunterladen</a>
                </li>
                
                <li className="doc-item">
                    <span>Letztes Schulzeugnis</span>
                    <a href="#contact" className="doc-link">Anfordern</a>
                </li>
                
                <li className="doc-item">
                    <span>Bescheinigung Lerninhalte Metalltechnik</span>
                    <a href="#contact" className="doc-link">Anfordern</a>
                </li>
                
                <li className="doc-item">
                    <span>Bescheinigung vertiefende Berufsorientierung</span>
                    <a href="#contact" className="doc-link">Anfordern</a>
                </li>
                
            </ul>
        </section>

        <section id="contact">
            <h2>Kontakt & Praktikumsanfrage</h2>
            <p>Habe ich Ihr Interesse geweckt? Ich freue mich darauf, Ihr Team im Zeitraum vom <strong>24.05.2027 bis 02.07.2027</strong> tatkräftig zu unterstützen.</p>
            
            <div className="card contact-card">
                <h3>Direkt Kontakt aufnehmen</h3>
                <p>Schreiben Sie mir eine E-Mail oder rufen Sie mich an für alle weiteren Details.</p>
                <div className='contact-card-div'>
                    <a href="mailto:justus.d2025@gmail.com" className="btn contact-card-div-a">E-Mail senden</a>
                </div>
                <p className='contact-card-p'>Telefonnummer und Kontaktdaten im E-Mail-Anhang bzw. Lebenslauf.</p>
            </div>
        </section>

    </div>

    )
}

const PortfolioComponent = () => {
    return(
        <>
        <BackgroundShader/>
        <PortfolioHeader/>
        <PortfolioContainer/>
        <SocialLinks/>
        </>
    );
}


export const portfolioRoutes: RouteObject = {
  path: '/portfolio',
  element: <PortfolioComponent />,
};