import '../../common/ibox_and_topics.css';
import { MarkdownLoader } from '../../common/markdownLoader';
import { useParams } from 'react-router-dom';

import '../../common/DinA4.css'

export function SummaryA4Page() {
  const { id } = useParams<{ id: string }>();
    return (
        <div className="portfolio-list">
            <div className='a4-page'>
                <MarkdownLoader url={`https://raw.githubusercontent.com/justusdecker/Elekro-Ausbildung-Lernstoff/main/summary/weekly/${id}.md`} />
            </div>
        </div>
    )

}