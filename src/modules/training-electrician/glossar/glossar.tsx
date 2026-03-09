import '../../common/ibox_and_topics.css';
import { MarkdownLoader } from '../../common/markdownLoader';
import { GitHubRawBaseUrl } from '../../common/constants';
export interface PortfolioEntryContent {
    body: string;
}
import '../../common/ibox_and_topics.css'
export default function Glossar() {

  return (

    <div className='topic'>
        <MarkdownLoader url = {`${GitHubRawBaseUrl}Elekro-Ausbildung-Lernstoff/main/glossar.md`}/>
    </div>

    
);
}