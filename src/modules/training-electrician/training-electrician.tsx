
import { NavLink } from 'react-router-dom';

import '../common/ibox_and_topics.css'

export function TrainingElecticianMain() {
    return (
        <div className="portfolio-list">
            <div className='topic'>
                <NavLink to="/training-electrician/weekly-summary">Wöchentliche Zusammenfassung</NavLink>
                <br />
                <NavLink to="/training-electrician/monthly-summary">Monatliche Zusammenfassung</NavLink>
                <br />
                <NavLink to="/training-electrician/laws">Wichtige Gesetze</NavLink>
                <br />
                <NavLink to="/training-electrician/glossar">Glossar</NavLink>
            </div>
        </div>
    )

}