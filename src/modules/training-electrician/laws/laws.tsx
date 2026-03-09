import '../../common/ibox_and_topics.css';
import { SingleMarkdownLoader } from '../../common/backendFetch';
import { GitHubRawBaseUrl } from '../../common/constants';

export default function Laws() {

  return (
    <SingleMarkdownLoader url = {`${GitHubRawBaseUrl}Elekro-Ausbildung-Lernstoff/main/laws.md`}/>
  );
}