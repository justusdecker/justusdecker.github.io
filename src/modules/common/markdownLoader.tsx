import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { GitHubRawBaseUrl } from './constants';
import type { JsonObject } from './types';
import { Link } from 'react-router-dom';

export function MarkdownLoader({ url }: {url: string}) {
  const [content, setContent] = useState<string>('');
    console.log(url);
  useEffect(() => {
    if (!url) return;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Artikel nicht gefunden");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
  }, [url]);

  return (
      <ReactMarkdown>{content}</ReactMarkdown>
  );
}

function MarkdownBuilder({ shortUrl, metadata }: { shortUrl: string, metadata: JsonObject }) {
    
  const posts = MarkdownGetJsonIndex({shortUrl, metadata});
    
  if (shortUrl) {
    return (
      <div className="portfolio-list">
        <h1>Portfolio Übersicht</h1>
        {posts.map((post) => (
          <div key={post.id} className="topic-item">
            <Link to={`/portfolio/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.timespan}</p>
            </Link>
            <MarkdownLoader url={`https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/dev/${post.id}.md`} />;
          </div>
        ))}
      </div>
    );
  }
}


export function MarkdownGetJsonIndex({ shortUrl, metadata }: { shortUrl: string, metadata: JsonObject }) {
  const [posts, setPosts] = useState<typeof metadata[]>([]);
    
  useEffect(() => {
    fetch(`${GitHubRawBaseUrl}${shortUrl}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [`${GitHubRawBaseUrl}${shortUrl}`]);

  return posts;

}