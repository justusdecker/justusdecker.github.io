import '../../common/listed-items-blog-style.css';
import { MarkdownLoader } from '../../common/markdownLoader';
import { GitHubRawBaseUrl } from '../../common/constants';
export interface PortfolioEntryContent {
    body: string;
}
export default function Glossar() {

  return (

    <div className='tile-entry'>
        <MarkdownLoader url = {`${GitHubRawBaseUrl}Elekro-Ausbildung-Lernstoff/main/glossar.md`}/>
    </div>

    
);
}