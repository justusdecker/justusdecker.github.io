
import { NavLink } from 'react-router-dom';

import '../common/listed-items-blog-style.css'
import '../common/neo-btn.css'
import { GitHubRawBaseUrl } from '../common/constants';
import { MarkdownLoader } from '../common/markdownLoader';

export function TrainingElecticianMain() {
    return (
        <div className="portfolio-list">
            <div className='tile-entry'>
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

export function TileEntryBuilder({shortUrl}: {shortUrl: string}) {
    return (
        <div className='tile-entry'>
            <MarkdownLoader url = {`${GitHubRawBaseUrl}${shortUrl}`}/>
        </div>
    )
};