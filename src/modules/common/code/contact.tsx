import { type RouteObject } from 'react-router-dom';
import '../common/listed-items-blog-style.css';
import { EmailAdress, LinkedInUrl } from '../../common/constants';
export const contactRoutes: RouteObject = {
    path: "/contact",
    element: (
       <>
            <section>
                <div className="tile-entry">
                    
                    <h2>Impressum</h2>
                    
                    <div>
                        <i>Angaben gem. §5 TMG:</i><br /><br />
                        <span>Justus Decker</span><br />
                        <span>Schwabenstraße 14</span><br />
                        <span>26723 Emden</span><br /><br />
                    </div>
                    <strong>Kontakt:</strong>
                    <p><a href="mailto:justus.d2025@gmail.com">{EmailAdress}</a></p>
                    <p><a href={LinkedInUrl}>LinkedIn</a></p>
                </div>
                
            </section>
       </> 
    )
};