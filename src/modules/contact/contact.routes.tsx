import { type RouteObject } from 'react-router-dom';
import Header from '../common/header';
import '../common/ibox_and_topics.css'
export const contactRoutes: RouteObject = {
    path: "/contact",
    element: (
       <>
            <Header />
            <section className="info-box info-box-overwrite">
                <div className="topic-list">
                <div className="topic-item">
                    <strong>💻 Email</strong>
                    <p><a href="mailto:justus.d2025@gmail.com">justus.d2025@gmail.com</a></p>
                </div>
                <div className="topic-item">
                    <strong>LinkedIn</strong>
                    <p><a href="https://www.linkedin.com/in/justus-decker/">justus-decker</a></p>
                </div>
                <div className="topic-item">
                    <strong>Kontaktformular</strong>
                    <p>Diese Funktion ist aktuell noch nicht implementiert!</p>
                </div>
                </div>
            </section>
       </> 
    )
};