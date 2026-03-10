
import { NavLink } from 'react-router-dom';

import '../common/ibox_and_topics.css'
import '../common/neo-btn.css'
export function TrainingElecticianMain() {
    return (
        <div className="portfolio-list">
            <div className='topic'>
                <NavLink className='neo-btn' to="/training-electrician/weekly-summary">Wöchentliche Zusammenfassung</NavLink>
                <br /><br />
                <NavLink className='neo-btn' to="/training-electrician/monthly-summary">Monatliche Zusammenfassung</NavLink>
                <br /><br />
                <NavLink className='neo-btn' to="/training-electrician/quarterly-summary">Quartal Zusammenfassung</NavLink>
                <br /><br />
                <NavLink className='neo-btn' to="/training-electrician/exam-preperation">Prüfungsvorbereitung</NavLink>
                <br /><br />
                <NavLink className='neo-btn' to="/training-electrician/laws">Wichtige Gesetze</NavLink>
                <br /><br />
                <NavLink className='neo-btn' to="/training-electrician/glossar">Glossar</NavLink>
            </div>
        </div>
    )

}