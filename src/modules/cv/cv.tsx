
import { MarkdownGetJsonIndex, MarkdownLoader } from '../common/markdownLoader';
import { Link } from 'react-router-dom';

import '../common/ibox_and_topics.css'

import '../common/search_and_tags.css'
import { useEffect, useState } from 'react';
import { GitHubRawBaseUrl } from '../common/constants';
import './cv.css';

export function GetCVJson({ shortUrl }: { shortUrl: string }) {
  const [posts, setPosts] = useState<any[]>([]);
    
  useEffect(() => {
    fetch(`${GitHubRawBaseUrl}${shortUrl}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [`${GitHubRawBaseUrl}${shortUrl}`]);

  return posts;

}

export function CVOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const shortUrl = "webpage-data/main/cv/index.json";
  const cvEntry = GetCVJson({shortUrl:shortUrl});

  const filteredCVEntrys = cvEntry.filter((cvEntry) => {
    if (!searchTerm) return true;
    
    const search = searchTerm.toLowerCase();

    // 1. Suche in den Tags (Teilwortsuche)
    const hasMatchingTag = cvEntry.tags?.some((tag: string) => 
        tag.toLowerCase().includes(search)
    );

    return hasMatchingTag;
    });

    return (
    <div className="portfolio-list">
      <h1>Lebenslauf</h1>

      <div className="search-container no-print">
        <input
          type="text"
          placeholder="Nach Tags filtern (z.B. sicherheit)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <small>{filteredCVEntrys.length} Ergebnisse für "{searchTerm}"</small>
        )}
      </div>

      <div className="topics-grid">
        {filteredCVEntrys.length > 0 ? (
          filteredCVEntrys.map((cvEntry) => (
            <div className="cv-entry">
              <header className="company-head">
                  <img className="company-logo" src={cvEntry.logo?cvEntry.logo : `${GitHubRawBaseUrl}webpage-data/main/cv/multiple_companies.png`} alt="Logo" />
                  <div className="company-info">
                      <h2>{cvEntry.company}</h2>
                      <p className="job-title">{cvEntry.profession}</p>
                  </div>
              </header>

              <div className="entry-body">
                  <div className="meta-data">
                      <span>[ Location: {cvEntry.location} ]</span>
                      <span>[ {cvEntry.timespan} ]</span>
                  </div>

                  <p className="description">
                      {cvEntry.description}
                  </p>

                  <ul className="task-list">

                      {cvEntry.tasks?.map((task: string) => (
                        <li>{task}</li>
                      ))}
                  </ul>

                  <div className="tag-container">
                      {cvEntry.tags?.map((tag: string) => (
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
          </div>
          ))
        ) : (
          <p className="no-results">Keine Einträge für diesen Filter gefunden.</p>
        )}
      </div>
    </div>
  );
}
