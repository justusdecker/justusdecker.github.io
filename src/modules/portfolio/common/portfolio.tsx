import { useEffect, useState } from "react";
import type { PortfolioMetadata } from "./portfolio.types";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";


function PortfolioDetail(attr: { category: string, id: string }) {
  const [content, setContent] = useState<string>('');
    console.log(attr.id);
  useEffect(() => {
    if (!attr.id) return;
    
    // Wir bauen den Pfad dynamisch zusammen
    const url = `https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${attr.category}/${attr.id}.md`;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Artikel nicht gefunden");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
  }, [attr.id]);

  return (
      <ReactMarkdown>{content}</ReactMarkdown>
  );
}

export default function PortfolioIndex({ category }: { category: string }) {
  const [posts, setPosts] = useState<PortfolioMetadata[]>([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${category}/index.json`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [category]);
  console.log(posts)
  return (
    <div className="portfolio-list">
      <h1>Portfolio: {category} Übersicht</h1>
      <ul className='portfolio-item'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/portfolio/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.timespan}</p>
              <PortfolioDetail category={category} id={post.id}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}