import '../../common/ibox_and_topics.css';
import { MarkdownLoader } from '../../common/markdownLoader';
import { GitHubRawBaseUrl } from '../../common/constants';
export interface PortfolioEntryContent {
    body: string;
}
export default function Laws() {

  return (
    <>
        <MarkdownLoader url = {`${GitHubRawBaseUrl}Elekro-Ausbildung-Lernstoff/main/laws.md`}/>
    </>
    
);
}