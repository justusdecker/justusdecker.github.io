import '../../common/DinA4.css';
import { MarkdownGetJsonIndex, MarkdownLoader } from '../../common/markdownLoader';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

import '../../common/DinA4.css'
import { GitHubRawBaseUrl } from '../../common/constants';

export function SummaryA4Page({category}:  {category: string}) {
  const { id } = useParams<{ id: string }>();
    return (
        <div className="portfolio-list">
            <div className='a4-page'>
                <MarkdownLoader url={`${GitHubRawBaseUrl}Elekro-Ausbildung-Lernstoff/main/${category}/${id}.md`} />
            </div>
        </div>
    )

}

export function Summary( {shortUrl, title, subdir}: {shortUrl: string, title: string, subdir: string} ){
    // ShortUrl Format: Elekro-Ausbildung-Lernstoff/main/summary/monthly/
    const [searchTerm, setSearchTerm] = useState('');
    
    const summarys = MarkdownGetJsonIndex({shortUrl:shortUrl + 'index.json'});
   const filteredPosts = summarys.filter((summary) => {
        if (!searchTerm) return true;
        
        const search = searchTerm.toLowerCase();

        // 1. Suche in den Tags (Teilwortsuche)
        const hasMatchingTag = summary.tags?.some((tag: string) => 
            tag.toLowerCase().includes(search)
        );

        // 2. Suche in der ID / im Dateinamen (falls kein Tag matcht)
        // Ersetzt Bindestriche durch Leerzeichen für natürlichere Suche
        const idName = summary.id.toLowerCase().replace(/-/g, ' ');
        const hasMatchingId = idName.includes(search);

        return hasMatchingTag || hasMatchingId;
        });

    return (
    <div className="portfolio-list">
      <h1>{title}</h1>

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

      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((summary) => (
            <div key={summary.id} className="tile-entry">
              <Link to={`/training-electrician/${subdir}/${summary.id}`}>
                <div className="preview-box">
                  <MarkdownLoader 
                    url={`${GitHubRawBaseUrl}${shortUrl}/${summary.id}.md`} 
                  />
                </div>
              </Link>
              
              <div className="tag-container">
                {summary.tags?.map((tag: string) => (
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