import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { GitHubRawBaseUrl } from './constants';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
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
      <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]} 
      rehypePlugins={[rehypeKatex]}>{content}</ReactMarkdown>
  );
}

/* 

function MarkdownBuilder({ shortUrl }: { shortUrl: string}) {
    
  const posts = MarkdownGetJsonIndex({shortUrl});
    
  if (shortUrl) {
    return (
      <div className="portfolio-list">
        <h1>Portfolio Übersicht</h1>
        {posts.map((post) => (
          <div key={post.id} className="topic">
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
*/


export function MarkdownGetJsonIndex({ shortUrl }: { shortUrl: string }) {
  const [posts, setPosts] = useState<any[]>([]);
    
  useEffect(() => {
    fetch(`${GitHubRawBaseUrl}${shortUrl}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [`${GitHubRawBaseUrl}${shortUrl}`]);

  return posts;

}