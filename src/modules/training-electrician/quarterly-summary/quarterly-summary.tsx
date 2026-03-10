import '../../common/ibox_and_topics.css';
import { MarkdownGetJsonIndex, MarkdownLoader } from '../../common/markdownLoader';
import { Link } from 'react-router-dom';

import '../../common/ibox_and_topics.css'
import '../common/search_and_tags.css'
import { useState } from 'react';

export function QuarterlySummaryOverview() {
  const [searchTerm, setSearchTerm] = useState('');

  const shortUrl = "Elekro-Ausbildung-Lernstoff/main/summary/quarterly/index.json";
  const posts = MarkdownGetJsonIndex({shortUrl:shortUrl});
    
  const filteredPosts = posts.filter((post) => {
    if (!searchTerm) return true;
    
    const search = searchTerm.toLowerCase();

    // 1. Suche in den Tags (Teilwortsuche)
    const hasMatchingTag = post.tags?.some((tag: string) => 
        tag.toLowerCase().includes(search)
    );

    // 2. Suche in der ID / im Dateinamen (falls kein Tag matcht)
    // Ersetzt Bindestriche durch Leerzeichen für natürlichere Suche
    const idName = post.id.toLowerCase().replace(/-/g, ' ');
    const hasMatchingId = idName.includes(search);

    return hasMatchingTag || hasMatchingId;
    });

  if (shortUrl) {
    return (
    <div className="portfolio-list">
      <h1>Quartal Zusammenfassungen</h1>

      <div className="search-container no-print">
        <input
          type="text"
          placeholder="Nach Tags filtern (z.B. sicherheit)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <small>{filteredPosts.length} Ergebnisse für "{searchTerm}"</small>
        )}
      </div>

      <div className="topics-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="topic">
              <Link to={`/training-electrician/quarterly-summary/${post.id}`}>
                <div className="preview-box">
                  <MarkdownLoader 
                    url={`https://raw.githubusercontent.com/justusdecker/Elekro-Ausbildung-Lernstoff/main/summary/quarterly/${post.id}.md`} 
                  />
                </div>
              </Link>
              
              <div className="tag-container">
                {post.tags?.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="tag-badge"
                    onClick={() => setSearchTerm(tag)} // Klick auf Tag füllt Suche aus
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Keine Einträge für diesen Filter gefunden.</p>
        )}
      </div>
    </div>
  );
  }
}