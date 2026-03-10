import '../../common/ibox_and_topics.css';
import { MarkdownGetJsonIndex, MarkdownLoader } from '../../common/markdownLoader';
import { Link } from 'react-router-dom';

import '../../common/ibox_and_topics.css'

export function WeeklySummaryOverview() {
  const shortUrl = "Elekro-Ausbildung-Lernstoff/main/summary/weekly/index.json";
  const posts = MarkdownGetJsonIndex({shortUrl:shortUrl});
    
  if (shortUrl) {
    return (
      <div className="portfolio-list">
        <h1>Wöchentliche Zusammenfassungen</h1>
        {posts.map((post) => (
          <div key={post.id} className="topic">
            <Link to={`/training-electrician/weekly-summary/${post.id}`}>
              <MarkdownLoader url={`https://raw.githubusercontent.com/justusdecker/Elekro-Ausbildung-Lernstoff/main/summary/weekly/${post.id}.md`} />
            </Link>
            <b>Tags: {post.tags}</b>
          </div>
        ))}
      </div>
    );
  }
}