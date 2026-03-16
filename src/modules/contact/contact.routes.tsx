import { type RouteObject } from 'react-router-dom';
import Header from '../common/header';
import '../common/ibox_and_topics.css';
export const contactRoutes: RouteObject = {
    path: "/contact",
    element: (
       <>
            <Header />
            <section>
                <div className="topic">
                    
                    <h2>Impressum</h2>
                    
                    <div>
                        <i>Angaben gem. §5 TMG:</i><br /><br />
                        <span>Justus Decker</span><br />
                        <span>Schwabenstraße 14</span><br />
                        <span>26723 Emden</span><br /><br />
                    </div>
                    <strong>Kontakt:</strong>
                    <p><a href="mailto:justus.d2025@gmail.com">justus.d2025@gmail.com</a></p>
                    <p><a href="https://www.linkedin.com/in/justus-decker/">LinkedIn</a></p>
                </div>
                
            </section>
       </> 
    )
};